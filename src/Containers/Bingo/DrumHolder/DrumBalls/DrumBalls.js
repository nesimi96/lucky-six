import React from 'react';
import '../../../../sass/main.scss';
import Ball from '../../../../Components/Ball/Ball';
import { drumData } from '../../../../Components/data/ballsData';
import '../../../../sass/main.scss';

const drumBalls = (props) => {


    let data = drumData();
    
    const balls = data.map((cur, ind) => {

        const style = {
            animation:props.gameEnds ? null : props.gameStart ? `ballsInDrum ${cur.animationTime} ease-in-out infinite` : null,
            style: `
            background-color: ${cur.color};
            width: 9%;
            height: 8%;
            font-size: 5px;
            position: absolute;
            left: ${cur.left};
            bottom: ${cur.bottom};
            `,
            num: cur.number
           }


        return <Ball key={ind} ballStyle={style}/>
    })
    
    
    
    return <div className="Drum-balls">
               <div>
                   { balls }
               </div>
           </div>
}

export default drumBalls;



 