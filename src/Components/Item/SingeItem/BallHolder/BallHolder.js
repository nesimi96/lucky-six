import React from 'react';
import '../../../../sass/main.scss'
import Ball from '../../../Ball/Ball';
import Lucky from '../../../../assets/svg/lucky';

const ballHolder = (props) => {

    let luckies = null;
     if(props.props.luckies){
         luckies = <Lucky />
     }

     // style for ball
     const style = {
       style: `
       background-color: ${props.props.color};
       width: 100%;
       height: 100%;
       font-size: ${window.innerWidth < 600 ? '13px' : ''};
       
       `,
       num: props.props.number
      }
      
    // if number is there, render ball on UI  
    let ball = null;
    if(props.props.number) {
        ball = <Ball ballStyle={style}  />
    }


    return <div className="Item-holder-Item__ball-holder">
                 <div className="Item-holder-Item__ball-holder-circle">
                   { ball ? ball : luckies }
                 </div>
           </div>
}

export default ballHolder;