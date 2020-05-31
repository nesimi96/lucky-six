import React, { Component } from 'react';
import '../../../../sass/main.scss';
import Ball from '../../../../Components/Ball/Ball';

class DrumBallHolder extends Component {

    render(){


        const style = {
            style: `
            background-color: ${this.props.gameStart ? this.props.finalCombo[this.props.counter].color : null};
            width: 100%;
            height: 100%;
            color: black;
            font-size: 20px;
            `,
            num: this.props.gameStart ? this.props.finalCombo[this.props.counter].number : null
        }

        let ball = null;
        if(this.props.gameStart){
            ball = <Ball ballStyle={style}/>
        }

        return <div className="Drum-balls-ball_holder"> 
                    <div style={{color: 'white'}} className="Drum-balls-ball_holder-entering">
                        { ball }
                    </div>
                </div>
    }


}

export default DrumBallHolder;

