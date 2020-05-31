import React, { Component } from 'react';
import '../../sass/main.scss';
import { itemData } from '../data/itemData';
import SingleItem from './SingeItem/SingleItem';
import { algorithm } from '../../Algorithm/Alhorithm'; 
import { Transition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';

class Item extends Component {

    state = {
        ballsUI: false,
        counter: 0,
        luckies: null,
    }

    componentWillMount(){
        // Before component will mount we get item Data like position, and money numbers for UI update
        const data = itemData();
        this.setState({ballsUI: data})
    }

    
    // Intial ball holders are empty, when this method gets called, balls getting updated
    updateUI = (dataUI) => {
        const counterState = this.state.counter
        const data = [...this.state.ballsUI];
        data[counterState] = dataUI[counterState];
        if(counterState < 30){
            this.setState(prevState => ({counter: prevState.counter + 1, ballsUI: data}))
            this.props.curNumber(data[counterState], 'restNumbers');
        }
        
        if(counterState === 29){
            this.props.gameEnding(dataUI, this.props.numbers);
        }
    
    }

    // Adding luckies to the state
    addingLuckiesToState = () => {
        const randomNumbers = [];
        for(var i = 0; randomNumbers.length < 2; i++){
            const random = Math.floor(Math.random() * 29);
            randomNumbers.push(random);
        }

      return randomNumbers
    }

    addingLuckiesToGame = (data) => {
        let randomNumbers = null;
        
        if(this.state.luckies){
            randomNumbers = [...this.state.luckies]
            randomNumbers = randomNumbers.sort();
         this.props.luckyPos(randomNumbers[1])
        }
        let copied = [...data];

        if(randomNumbers){
            randomNumbers.forEach((randomNumber, ind) => {
                copied.forEach((element, index) => {
                    if(randomNumber === index){
                        copied[index] = {...element, luckies: true}
                    }
                })
           })
        }

        return copied;
    }

    render(){
        
        let data = this.state.ballsUI;
        const dataUI = [];
        
        // Adding luckies to the state
        if(this.state.luckies === null){
            this.setState({luckies: this.addingLuckiesToState(data)})
        }

        data = this.addingLuckiesToGame(data);
    
        
        let algorithmData = null;
        if(this.props.finalCombo){
            algorithmData = this.props.finalCombo.slice(5, 50);
            
        for(let i = 0; i < data.length; i++){
            const dataObj = { column: data[i].column, row: data[i].row, moneyNum: data[i].moneyNum,
            number: algorithmData[i].number, color: algorithmData[i].color, luckies: true }
            dataUI.push(dataObj)
        }

    }
    
    if(this.props.gameContinue) {
            if(this.state.counter < 30){
                setTimeout(() => {
                    this.updateUI(dataUI)
                }, 3000)
            }
        }

        let items = null;
            items = data.map((cur, ind) => {

                return <div key={ind} style={{
                   gridColumn: cur.column, gridRow: cur.row
               }} className="Item-holder">
                       <SingleItem luckies={cur.luckies} moneyNum={cur.moneyNum} color={cur.color} number={cur.number}/>
                       </div>
           });
        
        return items
    }
}


const mapStateToProps = state => {
   if(state){
     return {
         numbers: state.numbers,
         gameContinue: state.gameContinue,
         finalCombo: state.finalCombo,
     }
   }
}

const mapDispatchToProps = dispatch => ({
    curNumber: (curNumber, type) => dispatch(action.currentNumber(curNumber, type)),
    gameEnding: (dataUI, numbers) => dispatch(action.gameEnds(dataUI, numbers)),
    luckyPos: (luckyPosition) => dispatch(action.luckyPosition(luckyPosition))
})

export default connect(mapStateToProps, mapDispatchToProps)(Item);
