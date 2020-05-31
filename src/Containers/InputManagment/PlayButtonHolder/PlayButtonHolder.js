import React, { Component } from 'react';
import '../../../sass/main.scss';
import PlayButton from '../../../Components/Button/Button';
import { connect } from 'react-redux';
import AlertBox from '../../../Components/AlertBox/AlertBox';
import * as action from '../../../store/actions/index';

class PlayButtonHolder extends Component {

    state = {
        alertBox: false,
        gameStart: false,
        allertMessage: false,
    }
    
     areNumbersReadyForRoll = () => {
         let fields, allNumbers, gameNumbers, duplicates;
         let errorCounter = 0;
         const numbers = this.props.numbers;

         fields = this.areAllFieldsFilled(numbers, errorCounter);
         allNumbers = this.thereAllAreNumbers(numbers, errorCounter);
         gameNumbers = this.onlyNumbersForGame(numbers, errorCounter);
         duplicates = this.checkForDuplicateNumbers(numbers, errorCounter);
         let moneyInputInvalid = this.props.moneyInputInvalid;

         if(fields) { this.setState({alertBox: true, message: 'SVA POLJA MORAJU BITI POPUNJENA'}) }
         else if(allNumbers) { this.setState({alertBox: true, message: 'SAMO SU BROJEVI DOPUŠTENI KAO UNOS'}) }
         else if(gameNumbers) { this.setState({alertBox: true, message: 'BROJEVI MORAJU BITI OD 1 - 48'}) }
         else if(duplicates.num && duplicates.repeated) { this.setState({alertBox: true, message: `BROJ "${duplicates.num}" SE PONAVLJA ${duplicates.repeated}x`}) }
         else if(moneyInputInvalid) { this.setState({alertBox: true, message: moneyInputInvalid}) }
         else if(!this.props.moneyValue){ this.setState({ alertBox: true, message: 'UNESITE IZNOS NOVCA' }) }
         else {
             this.setState({alertBox: null, gameStart: true, message: 'IGRA POČINJE...'});
             this.props.numsPlay(numbers);
             this.props.gameStartCountdown();
         }
        }

     // Check if all fields are filled with numbers
     areAllFieldsFilled = (numbers, counter) => {
         numbers.forEach(cur => cur === null ? counter++ : null)
         return counter
     }

     // Check if all are numbers. We don't wanna see String or something like that
     thereAllAreNumbers = (numbers, counter) => {
        const testing = numbers.map(cur => /^\d+$/.test(cur) ? /^\d+$/.test(cur) : /^\d+$/.test(cur))
        testing.forEach(cur => !cur ? counter++ : null)
        return counter
     }

     // Check if numbers are between 1 - 48
     onlyNumbersForGame = (numbers, counter) => {
        numbers.forEach(cur => cur < 1 || cur > 48 ? counter++ : null)  
        return counter
     }

     // Check if there is duplicate numbers
     checkForDuplicateNumbers = (numbers, counter) => {
         let duplicates = {num: null, repeated: null}

         numbers.forEach((curNum, ind) => {
            let privateCounter = 0;
             for(const el of numbers){
                 if(curNum === el){
                    counter++;
                    privateCounter++
                 }
             }

             if(privateCounter > 1){
                 duplicates.num = curNum;
                 duplicates.repeated = privateCounter;
            }

        })
                
         return duplicates
     }


    render(){

        window.addEventListener('keyup', (e) => {
            if(e.keyCode === 13){ this.areNumbersReadyForRoll() };
        })

        if(this.state.alertBox || this.state.gameStart) { 
            setTimeout(() => {
                 this.setState({alertBox: false, gameStart: false}) 
            }, 3500)
         }


        let button = <PlayButton content="PLAY" type='startGame' areNumbersReady={this.areNumbersReadyForRoll} style={PlayButtonStyle}/>
        if(this.props.playButton){
            button = <PlayButton content="NEW GAME" type='restartGame' areNumbersReady={this.areNumbersReadyForRoll} style={PlayButtonStyle}/>
        }



        return <div className="PlayButtonHolder">
                   {this.state.alertBox || this.state.gameStart ? <AlertBox style={alertBox} message={this.state.message} 
                   state={this.state}/> : null}
                   { button }
               </div>
    }
  }

const mapStateToProps = state => {
    return {
        numbers: state.checkNumbers,
        moneyInputInvalid: state.moneyInputInvalid,
        playButton: state.playButton,
        moneyValue: state.moneyValue,
    }
}

const mapDispatchToProps = dispatch => ({
      numsPlay: (numbers) => dispatch(action.numbersForPlay(numbers)),
      gameStartCountdown: () => dispatch(action.gameStartCoundown()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayButtonHolder);


const PlayButtonStyle = () => {
    return `
       background-color: rgb(222, 222, 222);
       //border: 2px solid black;
       border: none;
       cursor: pointer;
       width: 100%;
       height: 100%;
       font-weight: 600;
       color: black;
       letter-spacing: .5px;

       &:hover {
        background-color: rgb(166, 165, 164);
        
       }

       &:focus {
           outline: none;
       }
    `
}

export const alertBox = () => {
    return `
        position: ${window.innerWidth > 1200 ? 'absolute' : 'fixed'};
        top: ${window.innerWidth > 1200 ? 'none' : '10px'};
        left: ${window.innerWidth > 1200 ? '150px' : '50%'};
        z-index: 500;
        width: max-content;
        height: ${window.innerWidth > 1200 ? '100%' : 'max-content'};
        padding: ${window.innerWidth > 1200 ? '0 20px' : '15px 20px'};
        font-weight: 600;
        font-size: ${window.innerWidth > 1200 ? '13px' : '11px'};
        color: black;
        transform: ${window.innerWidth > 1200 ? 'none' : 'translateX(-50%)'};
        box-shadow:${window.innerWidth > 1200 ? 'none' : ' 0 1px 5px 0 rgba(225, 225, 225, 0.28)'};

        display: flex;
        align-items: center;
    `;
}