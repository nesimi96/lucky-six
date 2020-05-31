import React, { Component } from 'react';
import '../../../sass/main.scss';
import StatisticItem from '../../../Components/StatisticItems/StatisticItem';
import { moneyConvert } from '../../../Algorithm/helpFunctions/moneyConvert';
import Forbidden from '../../../Components/Forbidden/Forbiden';
 
class UserStatistics extends Component {
    render() {
          
        let userData = this.props.userData;
        let resultsUI = null;
        if(userData){         
           resultsUI = <React.Fragment>
               <StatisticItem header="Dobijene igre:" isThere={userData} value={userData.wonGames}/>
               <StatisticItem header="Izgubljene igre:" isThere={userData} value={userData.lostGames}/>
               <StatisticItem header="Novčani dobitak" isThere={userData} value={moneyConvert(userData.moneyInc)}/>
               <StatisticItem header="Novčani gubitak:" isThere={userData} value={moneyConvert(userData.moneyExp)}/>
               <StatisticItem header="Novčani bilans" isThere={userData} value={moneyConvert(userData.bilans)}/>
               <StatisticItem header="Najveći dobitak:" isThere={userData} value={moneyConvert(userData.bestScore)}/>
           </React.Fragment>
        }

        // Show statistic if user are logged in
       let userLogged = null;
       userLogged = this.props.token ? <React.Fragment>
        <div className="UserStatistics-stat-holder">
                        { resultsUI }
                    </div>
                   </React.Fragment> : <Forbidden />

        return <div className="UserStatistics">
                    <div className="UserStatistics-header-holder">
                         <p>Moja statistika</p>
                    </div>
                    { userLogged }
               </div>
    }
}

export default UserStatistics;