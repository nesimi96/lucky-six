import React from 'react';
import { ballsData } from '../Components/data/ballsData';
import { win } from './win-lose/win';
import { lose } from './win-lose/lose';

export const Algorithm = (numbers, nextWin, moneyInvested) => {

     const ballData = ballsData(); 
     const numbersUI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28 , 29, 30, 31, 32, 33, 34, 35];

    let finalCombo = null;
    var difference = function (a, b) { return Math.abs(a - b); }
    let diff = difference(nextWin.counter, nextWin.limit);
    
    if(numbers){

        if(diff === 1 && moneyInvested < 11){
            finalCombo = win(numbers, nextWin, moneyInvested);
        }else {
            finalCombo = lose(numbers, nextWin, moneyInvested);
        }

    }else {
        finalCombo = numbersUI;
    }

    let dataForUI = [];
    finalCombo.forEach((cur, ind) => {
        for(const ball of ballData){
          if(cur === ball.number){
              dataForUI.push(ball);
          }
        }
    })

    console.log(finalCombo);
    
   return dataForUI;
     

}