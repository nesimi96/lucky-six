import React from 'react';
import '../../../sass/main.scss'
import BallHolder from './BallHolder/BallHolder';
import NumberHolder from './NumberHolder/NumberHolder';

const singeItem = (props) => {

    return <div className="Item-holder-Item">
                <BallHolder props={props}/>
                <NumberHolder moneyNum={props.moneyNum}/>
           </div>
}

export default singeItem;