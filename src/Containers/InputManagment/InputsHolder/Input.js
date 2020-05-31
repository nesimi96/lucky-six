import React, { Component } from 'react';
import '../../../sass/main.scss'
import { connect } from 'react-redux';
import * as action from '../../../store/actions/index';
import MoneyInput from './MoneyInput/MoneyInput';
import PlayButton from '../../../Components/Button/Button';

class Input extends Component {

    state = {
        isInputValid: [null, null, null, null, null, null],
        inputNumbers: [null, null, null, null, null, null],
        inputVal: ['', '', '', '', '', ''],
    }

    readValue = (e, index) => {
        const input = e.target.value;
        this.checkIsNumber(input, index)
        this.checkNumberValidation(input, index);
        this.updateStateWithInputNumbers(e, input, index);
    }

    checkIsNumber = (input, index) => {
        const isNumber = /^\d+$/.test(input);
        let copied = {...this.state.isInputValid}

        if(isNumber){
            if(copied[index]){
                const newValue = copied[index] = false
                this.setState({isInputValid: copied})
            }
        }else if(!isNumber){
            if(copied[index] === null){
                const newValue = copied[index] = true
                this.setState({isInputValid: copied});
            }
        }
    }

    checkNumberValidation = (input, index) => {
        if(input <= 0 || input > 48){
            let copied = {...this.state.isInputValid}
            const newValue = copied[index] = true
            this.setState({isInputValid: copied})
        }
    }

    updateStateWithInputNumbers = (e, input, index) => {
        
        const curVal = e.target.value;
        const copied = [...this.state.inputNumbers];
        copied[index] = curVal;

        this.setState({inputNumbers: copied});
    }

    
    render(){
   
        this.props.sendNumbers(this.state.inputNumbers);

        const inputsData = [1, 2, 3, 4, 5, 6]; 
        const inputs = inputsData.map((cur, ind, arr) => {
            return this.props.gameStart && window.innerWidth < 1000 ? <div></div> : 
            <input value={this.props.gameStart ? this.state.inputVal[ind] : null}
             onChange={(e) => this.readValue(e, ind)} type="text" maxLength="2" key={ind}
            style={{
                border: this.state.isInputValid[ind] ? '1px solid red' : null,
            }} />
        })
    
        return <React.Fragment>
                    { inputs }
                    <MoneyInput />
               </React.Fragment>
    }
    
}

const mapStateToProps = state => {
     if(state){
         return {
             gameStart: state.gameStart
         }
     }
}

const mapDispatchToPros = dispatch => ({
    sendNumbers: (inputNumbers) => dispatch(action.numsToChecking(inputNumbers))
})

export default connect(mapStateToProps, mapDispatchToPros)(Input);
