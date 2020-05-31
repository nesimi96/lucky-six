import React, { Component } from 'react';
import '../../../sass/main.scss';
import { algorithm } from '../../../Algorithm/Alhorithm';
import { data } from '../../../Components/data/itemData';
import Ball from '../../../Components/Ball/Ball';
import { connect } from 'react-redux';
import * as action from '../../../store/actions/index';

class FiveNums extends Component {


    state = {
        updateUI: [1, 2, 3, 4, 5],
        counter: 0,
    }

    // RENDER FIRST 5 BALLS EVERY X SECONDS 
    renderBalls = (algoData) => {

        const renderTime = 3500;
        const counter = this.state.counter;
        let copied = [...this.state.updateUI];
        copied[counter] = algoData[counter];

        if(counter < 5){
            this.props.curNumber(copied[counter], 'fiveNumbers');
            setTimeout(() => {
                   this.setState(prevState => ({counter: prevState.counter + 1, updateUI: copied}))
            }, renderTime)
        }

        if(counter === 5){
             this.props.continueGame(renderTime);
        }
    }
    
    render(){


        // GET DATA FROM ALGORITHM. WIN OR LOSE
        let ballHolder = this.state.updateUI.map((cur, ind) => {

            const style = {
                style: `
                background-color: ${cur.color};
                width: 100%;
                height: 100%;
                font-size: ${window.innerWidth < 600 ? '13px' : ''};
                `,
                num: cur.number
            }

            return <div key={ind} className="FiveNums-numbers-holder__number-holder-circle">
                      {cur.number ? <Ball ballStyle={style}/> : null}
                 </div>
        })

        if(this.props.gameStart) {
            this.renderBalls(this.props.finalCombo.slice(0, 5));
        }

        return <div className="FiveNums"> 
                    <div className="FiveNums-numbers-holder">
                        {  ballHolder }
                    </div>
            </div>
    }

}

const mapStateToProps = (state) => {
    if(state){
        return {
             numbers: state.numbers,
             finalCombo: state.finalCombo,
        }
    }

    return {
        state: state
    }
}

const mapDispatchToProps = dispatch => ({
      continueGame: (renderTime) => dispatch(action.continueGame(renderTime)),
      curNumber: (curNumber, type) => dispatch(action.currentNumber(curNumber, type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FiveNums);