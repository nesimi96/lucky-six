import React, { Component } from 'react';
import '../../sass/main.scss';

class Hamburger extends Component {
    render(){
        return <div onClick={this.props.openNav} className="Hamburger">
                    <div className="Hamburger-item"> </div>
               </div>
    }
}

export default Hamburger;