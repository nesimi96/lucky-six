import React, { Component } from 'react';
import '../../../sass/main.scss';
import StatisticItem from '../../../Components/StatisticItems/StatisticItem';
import GamePlayedColor from '../../../Components/StatisticItems/gamePlayedColor';
import Analytics from '../../../Components/Analytics/Analytics';
import { percentageCalc } from '../../../Algorithm/helpFunctions/calcPercentage';
import { moneyConvert } from '../../../Algorithm/helpFunctions/moneyConvert';
import Forbidden from '../../../Components/Forbidden/Forbiden';

class MoneyStatistics extends Component {
    render(){

        let bestResult, bilans, totalExp, totalInc, totalMoney, percentageWon, percentageLost, 
        counterNextWin, totalNextWin, limitNextWin;

        if(this.props.moneyStat){
            totalMoney = moneyConvert(this.props.moneyStat.totalMoney);
            totalExp = moneyConvert(this.props.moneyStat.totalExpense);
            totalInc = moneyConvert(this.props.moneyStat.totalIncome);
            bestResult = moneyConvert(this.props.moneyStat.bestResult);
            bilans = moneyConvert(this.props.moneyStat.bilans);
            const total = totalExp + totalInc;

            percentageWon = percentageCalc(totalInc, total);
            percentageLost = percentageCalc(totalExp, total);
        }

        if(this.props.nextWin){
            counterNextWin = this.props.nextWin.counter;
            limitNextWin = this.props.nextWin.limit;
            totalNextWin = this.props.nextWin.total;
            totalNextWin = totalNextWin.toString();
        }

       // Show statistic if user are logged in
       let userLogged = null;
       userLogged = this.props.token ? <React.Fragment>
        <div className="MoneyStatistics-money-holder">
                        <StatisticItem header="Ukupni dobitak:" isThere={totalInc} value={totalInc}/>
                        <StatisticItem header="Ukupni gubitak:" isThere={totalExp} value={totalExp}/>
                        <StatisticItem header="Bingo bilans:" isThere={bilans} value={bilans}/>
                        <StatisticItem header="Najveći dobitak:" isThere={bestResult} value={bestResult}/>
                        <StatisticItem header="Sljedeći dobitak - igre:" isThere={counterNextWin} value={`${counterNextWin} / ${limitNextWin}`}/>
                        <StatisticItem header="Sakupljeni novac:" isThere={totalNextWin} value={`$ ${totalNextWin}`}/>
                    </div>
                   </React.Fragment> : <Forbidden />


    
        return <div className="MoneyStatistics">
                    <div className="UserStatistics-header-holder">
                         <p>Bingo statistika</p>
                    </div>
                    { userLogged }
              </div>
    } 
}

export default MoneyStatistics;