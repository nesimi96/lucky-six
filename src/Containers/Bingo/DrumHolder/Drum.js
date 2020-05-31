import React, { Component } from 'react';
import '../../../sass/main.scss';
import DrumBalls from './DrumBalls/DrumBalls';
import DrumBallHolder from './DrumBallHolder/DrumBallHolder';
import { connect } from 'react-redux';
import Ball from '../../../Components/Ball/Ball';

class Drum extends Component{

    state = {
        ballStart: null,
        animationStart: null,
        counter: 0
    }

    incrementCounter = () => {
        if(this.state.counter < 34){
            this.setState(prevState => ({counter: prevState.counter + 1}))
        }
    }

    render(){

     // If game started, I want to run balls start
      if(this.props.gameStart || this.props.gameContinued){
          setTimeout(() => {
              if(this.state.ballStart === null){
                  this.setState({ballStart: true, animationStart: true,})
              }
          }, this.props.gameStart ? 3500 : this.props.gameContinued ? 3000 : null)
      }
 
      // If balls started, I want change them every x seconds
      if(this.state.ballStart){
          setTimeout(() => {
            this.incrementCounter();
          }, 3000)
      }




      // *** MOBILE VERSION *** ///
      const width = window.innerWidth;
       let drumBalls = null;
       drumBalls = width < 900 ? null : <DrumBalls gameStart={this.props.gameStart} gameEnds={this.props.gameEnds}/>;


       const style = {
        style: `
        background-color: ${this.props.gameStart ? this.props.finalCombo[this.state.counter].color : null};
        width: 100%;
        height: 100%;
        color: black;
        font-size: 50px;
        `,
        num: this.props.gameStart ? this.props.finalCombo[this.state.counter].number : null
    }

        let ball = null;
        if(this.props.gameStart){
            ball = <Ball ballStyle={style}/>
        }

       let drumBallHolder = null;
       drumBallHolder = width < 900 ? ball : <DrumBallHolder gameStart={this.props.gameStart}
counter={this.state.counter} animationStart={this.state.animationStart} finalCombo={this.props.finalCombo}/>

    return <div className="Drum">
               { drumBalls }
               { drumBallHolder }
            </div>
    }
}

const mapStateToProps = state => {
   
    if(state){
        return {
            finalCombo: state.finalCombo,
            gameContinued: state.gameContinued,
            gameStart: state.gameStart,
            gameEnds: state.gameEnds,
        }
    }
}

export default connect(mapStateToProps)(Drum);