import React, { Component } from 'react';
import '../../sass/main.scss';
import InputsHolder from './InputsHolder/InputsHolder';
import GameNumbers from './GameNumbers/GameNumbers';

class InputManagment extends Component {
    render(){
        return <main className="InputManagment">
                     <GameNumbers />
                     <InputsHolder />
               </main>
    }
}

export default InputManagment;