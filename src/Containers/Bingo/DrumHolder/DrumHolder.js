import React,{ Component } from 'react';
import '../../../sass/main.scss';
import Drum from './Drum';
import FiveNums from './FiveNums';

class DrumHolder extends Component {

    render() {

        // MOBILE VERSION
       const width = window.innerWidth;
       let fiveNum = null;
       //fiveNum = width < 900 ? null : <FiveNums gameStart={this.props.gameStart}/>;
                                                                      
        return <div className="DrumHolder">
                   <Drum />
                   <FiveNums gameStart={this.props.gameStart}/>
               </div>
    }
}

export default DrumHolder;