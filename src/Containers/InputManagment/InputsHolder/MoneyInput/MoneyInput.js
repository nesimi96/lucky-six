import React, { Component } from 'react';
import '../../../../sass/main.scss';
import AlertBox from '../../../../Components/AlertBox/AlertBox';
import { alertBox } from '../../PlayButtonHolder/PlayButtonHolder';
import { connect } from 'react-redux';
import * as action from '../../../../store/actions/index';

class MoneyInput extends Component {

    state = {
        numberInvalid: null,
        moneyValue: null,
    }

    checkIsNumberValid = (e) => {
     const input = e.target.value;
     this.setState({numberInvalid: null, moneyValue: input });
     this.isNumber(input);
     this.onlySpecifiedNumbers(input);
     this.numbersMustExist(input);
    }

    isNumber = input => {
        const isNumber = /^\d+$/.test(input);
        if(!isNumber){ this.setState({numberInvalid: 'UNOS NOVCA MORA BITI BROJ'}) }
    }

    onlySpecifiedNumbers = input => {
        if(input < 1 || input > 50){ this.setState({numberInvalid: 'UNOS NOVCA MORA BITI 1 - 50'}) }
    }

    numbersMustExist = input => {
        if(input == 0){ this.setState({numberInvalid: 'UNESITE IZNOS NOVCA'}) }
    }

    
    render(){

        this.props.moneyInput(this.state.numberInvalid, this.state.moneyValue)
        
        return <div className="MoneyInput">
                       <input autocomplete="off" id="moneyInp" style={{
                    border: `3px solid ${this.state.numberInvalid ? 'red' : 'rgb(46, 110, 46'}`
                       }} onChange={(e) => this.checkIsNumberValid(e)} type="text" />
                       <h1>$</h1>
               </div>

    }
}

const mapDispatchToProps = dispatch => ({
    moneyInput: (invalidMessage, moneyValue) => dispatch(action.moneyInputValid(invalidMessage, moneyValue))
})

export default connect(null, mapDispatchToProps)(MoneyInput);

