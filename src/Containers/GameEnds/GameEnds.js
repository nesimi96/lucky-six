import React, { Component } from 'react';
import '../../sass/main.scss';
import Summary from './SummaryBox/Summary';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group'
import * as action from '../../store/actions/index';
import { act } from 'react-dom/test-utils';

class GameEnds extends Component {

    render(){
        
        let report = null;

        if(this.props.userNum && this.props.finalCombo && 
           this.props.moneyInvested && this.props.luckyPosition){
            
            // fetch games played data
            this.props.fetchGamesPlayed();
            this.props.fetchMoneyStat();

            if(!this.props.nextWin){
                this.props.fetchNextWin();
            }

            if(!this.props.userData)
            this.props.fetchUserStat(this.props.userID);

            report={
                userNumbers: this.props.userNum,
                finalCombo: this.props.finalCombo,
                moneyInvested: this.props.moneyInvested,
                luckyPos: this.props.luckyPosition,
                lastBall: this.props.lastBall

            }
        }

        return <Transition in={this.props.gameEnds} timeout={0} mountOnEnter unmountOnExit >
               {state => (
                   <div className="GameEnds"> 
                        <Summary nextWin={this.props.nextWin} databaseKey={this.props.databaseKey} userID={this.props.userID} userData={this.props.userData} moneyInvested={this.props.moneyInvested} newGame={this.props.playNewGame} 
                        closeReport={this.props.closeReports} 
                        report={report}/>
                   </div>
               )} 

              </Transition>
    }
}

const mapStateToProps = state => {
    if(state){
        return {
            gameEnds: state.gameEnds,
            userNum: state.numbers,
            finalCombo: state.finalCombo,
            moneyInvested: state.moneyValue,
            luckyPosition: state.luckyPos,
            lastBall: state.result,
            userID: state.userID,
            userData: state.userData,
            databaseKey: state.databaseKey,
            nextWin: state.nextWin
        }
    }
}

const mapDispatchToProps = dispatch => ({
      closeReports: () => dispatch(action.closeReport()),
      fetchGamesPlayed: () => dispatch(action.gamesPlayed()),
      fetchMoneyStat: () => dispatch(action.moneyStatistic()),
      fetchUserStat: (userID) => dispatch(action.getUserDataFromServer(userID)),
      fetchNextWin: () => dispatch(action.getNextWinData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameEnds);
