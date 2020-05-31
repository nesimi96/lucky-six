import React, { Component } from 'react';
import '../../../sass/main.scss';
import PlayButton from '../../../Components/Button/Button';
import * as action from '../../../store/actions/backend';
import { connect } from 'react-redux';
import axios from 'axios';

class Summary extends Component {

     isWinOrLose = (report) => {
         let counter = 0;
    
             report.userNumbers.forEach(cur => {
                 for(const number of report.finalCombo){
                     if(number.number == cur){
                      counter++
                     }
                 }
             })

        this.editGamesPlayed(counter, this.props.gamesPlayed);
        this.editMoneyStat(counter, this.props.moneyStat, this.moneyReport(report, counter));
        this.editUsersData(this.props.userID, this.props.databaseKey, counter, 
        this.props.userData, this.moneyReport(report, counter), this.props.moneyInvested);
        this.editNextWin(this.props.nextWin, this.props.moneyInvested);
    
         return counter
     }

     // *** EDIT GAMES PLAYED IN DATABASE *** //
     editGamesPlayed = (counter, gamesPlayed) => {

        let newData = {
            lost: counter < 6 ? gamesPlayed.lost + 1 : gamesPlayed.lost,
            total: gamesPlayed.total + 1,
            won: counter === 6 ? gamesPlayed.won + 1 : gamesPlayed.won
        }
         
        // EDIT DATA
        axios.patch('https://bingo-c6d2c.firebaseio.com/games-played.json', newData)
     }

     // *** EDIT MONEY STATISTICS IN DATABASE *** //
     editMoneyStat = (counter, moneyStat, moneyWon) => {

          let newData = {
            bestResult: moneyWon > moneyStat.bestResult ? moneyWon : moneyStat.bestResult,
            totalExpense: counter === 6 ? moneyStat.totalExpense + moneyWon : moneyStat.totalExpense,
            totalIncome: moneyStat.totalIncome + +this.props.moneyInvested,
            bilans: moneyStat.bilans,
          }

          newData.bilans = newData.totalIncome - newData.totalExpense;

        // EDIT DATA
        axios.patch('https://bingo-c6d2c.firebaseio.com/money-stat.json', newData)

     }

     // *** EDIT USERS DATA *** //
     editUsersData = (userID, databaseKey, counter, userData, moneyWon, moneyInvested) => {
       
        if(userData){
            const newData = {
                bestScore: counter === 6 && moneyWon > userData.bestScore ? moneyWon : userData.bestScore,
                lostGames: counter < 6 ? userData.lostGames + 1 : userData.lostGames,
                wonGames: counter === 6 ? userData.wonGames + 1 : userData.wonGames,
                moneyInc: counter === 6 ? userData.moneyInc + moneyWon : userData.moneyInc,
                moneyExp: counter < 6 ? userData.moneyExp + +moneyWon : userData.moneyExp,
                bilans: userData.bilans,
            }
    
            newData.bilans = newData.moneyInc - newData.moneyExp;
    
             // EDIT DATA
             axios.patch(`https://bingo-c6d2c.firebaseio.com/user/${userID}/${databaseKey}.json`, newData)
        }
         
        }

        // *** EDIT NEXT WIN DATA IN DATABASE *** //
        editNextWin = (nextWin, moneyInvested) => {

            const random = Math.floor(Math.random() * 6 + 5);
            nextWin.counter = nextWin.counter === nextWin.limit - 1 ? 0 : nextWin.counter
            nextWin.total = nextWin.counter === nextWin.limit - 1 ? 0 : nextWin.total
        
            const newData = {
                counter: nextWin.counter + 1,
                limit: nextWin.counter === 0 ? random : nextWin.limit,
                total: nextWin.counter === 0 ? 0 : nextWin.total + +moneyInvested,
            }

        // EDIT DATA
         axios.patch(`https://bingo-c6d2c.firebaseio.com/next-win.json`, newData)
        }

     moneyReport = (report, counter) => {

        let money = null;
        if(counter === 6){
            money = (+report.lastBall.moneyNum * +report.moneyInvested)

            report.finalCombo.forEach((cur, ind) => {
                if(ind == (report.luckyPos + 5) && cur.number == report.lastBall.number ){
                    money = money * 2
                }
            })
        }else {
            money = report.moneyInvested;
        }
        
        return money;

     }

    render(){
    
         if(this.props.report){
         const report = this.props.report;
         const counter = this.isWinOrLose(report);
         const money = this.moneyReport(report, counter)

          return  <div className="Summary">
                        <h1 style={{
                          color: counter === 6 ? 'green' : 'red', 
                        }} className="Summary-1">YOU {counter === 6 ? 'WIN' : 'LOSE'}</h1>
                        <h1 style={{
                           color: counter === 6 ? 'green' : 'red',
                        }} className="Summary-2">{money}$</h1>
                        <div className="Summary-button-holder">
                        <PlayButton type='newGame' newGame={this.props.newGame} 
                        closeReport={this.props.closeReport} content='NOVA IGRA' style={buttonStyle}/>
                        <PlayButton type='analize' closeReport={this.props.closeReport} content='ANALIZIRAJ' style={buttonStyle}/>
                        </div>
                   </div>
         }else {
             return null
         }
    }
}

const mapStateToProps = state => {
    if(state){
        return {
            gamesPlayed: state.gamesPlayed,
            moneyStat: state.moneyStat,
        }
    }
}

export default connect(mapStateToProps)(Summary);

const buttonStyle = (mapStateToProps) => {
    return `
    background-color: rgb(222, 222, 222);
    //border: 2px solid black;
    border: none;
    cursor: pointer;
    padding: 20px 40px;
    font-weight: 600;
    color: black;
    letter-spacing: .5px;
    margin: 100px 10px 10px 10px;

    &:hover {
     background-color: rgb(166, 165, 164);
     
    }

    &:focus {
        outline: none;
    }
 `
}