import React, { Component } from 'react';
import '../../sass/main.scss';
import DrumHolder from './DrumHolder/DrumHolder';
import Item from '../../Components/Item/Item';
import { connect } from 'react-redux'
import { Algorithm } from '../../Algorithm/Alhorithm';
import * as action from '../../store/actions/index';
import GameEnds from '../../Containers/GameEnds/GameEnds';

class Bingo extends Component {

    render(){
    
        if(this.props.numbers){
        const winningNumbers = Algorithm(this.props.numbers, this.props.nextWin, +this.props.moneyValue);
        this.props.finalCombo(winningNumbers);
        }

        if(!this.props.nextWin){
            this.props.fetchNextWin();
        }

        return <main className="Bingo">
                   <GameEnds />
                   <DrumHolder gameStart={this.props.gameStart}/>
                   <Item />
               </main>
    }
}


const mapStateToProps = (state) => {
    if(state){
        return {
             numbers: state.numbers,
             gameStart: state.gameStart,
             nextWin: state.nextWin,
             moneyValue: state.moneyValue
        }
    }

    return {
        state: state
    }
}

const mapDispatchToProps = dispatch => ({
    finalCombo: (winningNumbers) => dispatch(action.sendFinalCombo(winningNumbers)),
    fetchNextWin: () => dispatch(action.getNextWinData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Bingo);