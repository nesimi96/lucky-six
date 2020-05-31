import * as actionTypes from './actionTypes';
import { act } from 'react-dom/test-utils';


// *    START THE GAME    * ///
export const sendFinalCombo = (numbers) => {
      return {
          type: actionTypes.FINAL_COMBO,
          numbers: numbers,
      }
}

// *    START THE GAME    * ///
const gameStartingCountdown = () => {
    return {
        type: actionTypes.GAME_START_COUNTDOWN,
    }
}

export const gameStartCoundown = () => {
        return dispatch => {
            setTimeout(() => {
                  return dispatch(gameStartingCountdown())
            }, 1000)
        }
}

// * ANALIZE GAME * ///
export const closeReport = () => {

    return {
        type: actionTypes.CLOSE_REPORT,
    }

}

// *    GAME ENDS    * ///
const gameEnding = (result) => {

    return {
        type: actionTypes.GAME_ENDS,
        result: result,
    }
}

export const gameEnds = (dataUI, numbers) => {

    const results = [];
    dataUI.forEach(data => {
        for(const num of numbers){
             if(data.number == num){
                 results.push(data);
             }
        }
    })

    const result = results[results.length - 1]
  
      return dispatch => {
          setTimeout(() => {
           return dispatch(gameEnding(result));
          }, 5000)
      }
    
}
 

// *   CONTINUE THE GAME    * ///



export const continueGame = (renderTime) => {
    return {
        type: actionTypes.CONTINUE_GAME,
    }
}


// *    TRANSFER NUMBERS TO STATE    * ///
export const numbersForPlay = (nums) => {

    return {
        type: actionTypes.NUMBERS_FOR_PLAY,
        numbers: nums
    }
}


// *    CHECK IF ALL NUMBERS ARE VALID TO START THE GAME    * ///
export const numsToChecking = (nums) => {
      return {
          type: actionTypes.SEND_NUMS_TO_CHECKING,
          numbers: nums,
      }
}

// *  IS MONEY INPUT VALID   * ///

export const moneyInputValid = (invalidMessage, moneyValue) => {
     return {
         type: actionTypes.MONEY_INPUT_VALID,
         isInvalid: invalidMessage,
         moneyValue: moneyValue
     }
}


// *   CURRENT NUMBER    * ///
export const currentNumber = (curNumberData, type) => {
    
    let curNumber = null;
    if(type === 'fiveNumbers'){
        curNumber = curNumberData
    }else if(type === 'restNumbers'){
        const newNumber = {
            number: curNumberData.number,
            color: curNumberData.color,
        }

        curNumber = newNumber
    }

    return {
        type: actionTypes.CURRENT_NUMBER,
        curNum: curNumber,
    }
}


// *  LUCKY POSITION  * ///

export const luckyPosition = (luckyPosition) => {
    return {
        type: actionTypes.LUCKY_POSITION,
        luckyPos: luckyPosition,
    }
}


/// ** OPEN NAVIGATION ** ///

export const openNavigation = () => {
    return {
        type: actionTypes.OPEN_NAV,
        nav: true,
    }
}

export const closeNavigation = () => {
    return {
        type: actionTypes.CLOSE_NAV,
        nav: null,
    }
}


