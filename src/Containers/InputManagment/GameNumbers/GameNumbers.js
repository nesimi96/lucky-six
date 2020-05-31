import React, { Component } from 'react';
import '../../../sass/main.scss';
import { connect } from 'react-redux';

class GameNumbers extends Component {

     state = {
         numberActive: [null, null, null, null, null, null]
     }

     activeNumber = (curGlobalNumber, curNum, index) => {
         const activeNumbers = [...this.state.numberActive];
         
         if(curGlobalNumber === +curNum && !this.state.numberActive[index]){
            activeNumbers[index] = true
             this.setState({numberActive: activeNumbers})
         }

     }


    render(){

        let numbers = null;
        if(this.props.numbers){
           const gameNumbers = this.props.numbers;
           const currentNumber = this.props.currentNumber;
           

            numbers = gameNumbers.map((cur, ind) => {
                let style = null;

                if(currentNumber){ this.activeNumber(currentNumber.number, cur, ind) }
                if(this.state.numberActive[ind]){
                    style = {
                        color: 'green',
                        transition: 'all .35s ease-in-out',
                        transform: 'scale(1.2)',
                        animation: 'gameNumbers .35s ease-in-out',
                        fontWeight: '700',
                    }
                }
               

                return <div key={ind} className="GameNumbers-number-holder"> 
                                <h1 style={style} >{cur}</h1>
                        </div>
            });

        }


        return <div className="GameNumbers">
                     { numbers }
               </div>
    }
}

const mapStateToProps = state => {
    if(state){
        return {
            numbers: state.numbers,
            currentNumber: state.currentNumber,
        }
    }
}

export default connect(mapStateToProps)(GameNumbers);