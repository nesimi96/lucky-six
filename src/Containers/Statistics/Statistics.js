import React, { Component } from 'react';
import '../../sass/main.scss';
import GamesPlayed from './GamesPlayed/GamesPlayed';
import MoneyStatistics from './MoneyStatistics/MoneyStatistics';
import UserStatistics from './UserStatistics/UserStatitics';
import { connect } from 'react-redux';
import * as action from '../../store/actions/backend';

class Statistics extends Component {

    state = {
        fetchData: true,
    }

    render(){

        if(this.state.fetchData){ 
            this.props.fetchGamesPlayed();
            this.props.fetchMoneyStat();
            this.setState({fetchData: null})
        }

        if(this.props.token && !this.props.userData){
            this.props.fetchUsersData(this.props.userID);
            this.props.fetchNextWin();
        }


        return <div className="Statistics"> 
                     <GamesPlayed token={this.props.token} gamePlayed={this.props.gamesPlayed}/>
                     <MoneyStatistics token={this.props.token} nextWin={this.props.nextWin} moneyStat={this.props.moneyStat}/>
                     <UserStatistics token={this.props.token} userData={this.props.userData}/>
               </div>
    }
}

const mapStateToProps = state => {
    if(state){
        return {
            gamesPlayed: state.gamesPlayed,
            moneyStat: state.moneyStat,
            token: state.token,
            email: state.email,
            userID: state.userID,
            userData: state.userData,
            nextWin: state.nextWin,
        }
    }
}

const mapDispatchToProps = dispatch => ({
    fetchGamesPlayed: () => dispatch(action.gamesPlayed()),
    fetchMoneyStat: () => dispatch(action.moneyStatistic()),
    fetchUsersData: (userID) => dispatch(action.getUserDataFromServer(userID)),
    fetchNextWin: () => dispatch(action.getNextWinData()),
})



export default connect(mapStateToProps, mapDispatchToProps)(Statistics);