import React from 'react';
import '../../sass/main.scss';

const navigationItem = (props) => {

    return <div onClick={() => window.location = props.path} className="Navigation-box-item">
                 <h3>{props.text}</h3>
           </div>
}

export default navigationItem;