import React, { Component } from 'react';
import '../../../sass/main.scss';
import GamePlayed from '../../../Components/StatisticItems/StatisticItem';
import Analytics from '../../../Components/Analytics/Analytics';
import GamePlayedColor from '../../../Components/StatisticItems/gamePlayedColor';
import { percentageCalc } from '../../../Algorithm/helpFunctions/calcPercentage';
import Forbidden from '../../../Components/Forbidden/Forbiden';

class GamesPlayed extends Component {
   render(){

     let data = null;
     let percentageWon = null;
     let percentageLost = null;        
      if(this.props.gamePlayed){
          data = this.props.gamePlayed;
          percentageWon = percentageCalc(data.won, data.total);
          percentageLost = percentageCalc(data.lost, data.total);
      }

      // Display statistic if user are logged in
      let userLogged = null;
       userLogged = this.props.token ? <React.Fragment>
        <div className="GamesPlayed-statistic">
                        <GamePlayed header="Odigrano igara:" isThere={data} value={data ? data.total : null}/>
                        <GamePlayed header="Dobijene igre:" isThere={data}  value={data ? data.won : null}/>
                        <GamePlayed header="Izgubljene igre:" isThere={data} value={data ? data.lost : null}/>
                   </div>
                   <div className="GamesPlayed-win-lose-holder">
                        <GamePlayedColor header="DOBITAK" isThere={data} value={percentageWon} color="aqua"/>
                        <GamePlayedColor header="GUBITAK" isThere={data} value={percentageLost} color="red"/>
                   </div>
                   <div className="GamesPlayed-analyitics">
                         <Analytics analyticsWon={percentageWon} analyticsLost={percentageLost}
                          type="game-analytics"/>
                   </div>
                   </React.Fragment> : <Forbidden />

           return <div className="GamesPlayed">
                    <div className="UserStatistics-header-holder">
                         <p>Statistika igrača</p>
                    </div>
                     { userLogged }
                 </div>

   }
}

export default GamesPlayed;

/*
          return <div className="GamesPlayed">
                         <div className="UserStatistics-header-holder">
                              <p>Ukupna statitika igrača</p>
                         </div>

                         <Forbidden />
                 </div>




*/