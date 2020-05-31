import * as actionTypes from '../actions/actionTypes';

const initialState = {
    numbers: null,
    checkNumbers: null,
    gameStart: null,
    gameEnds: null,
    gameContinue: null,
    finalCombo: null,
    moneyInputInvalid: null,
    moneyValue: null,
    currentNumber: null,
    result: null,
    luckyPos: null,
    playButton: null,
    gamesPlayed: null,
    moneyStat: null,
    token: null,
    email: null,
    expiresIn: null,
    userID: null,
    userData: null,
    databaseKey: null,
    nextWin: null,
    navOpen: null,
}

const reducer = (state = initialState, action) => {

      switch(action.type) {
          case actionTypes.NUMBERS_FOR_PLAY : 
          return {
              ...state,
              numbers: action.numbers
          }
          case actionTypes.SEND_NUMS_TO_CHECKING : 
          return {
              ...state, 
              checkNumbers: action.numbers
          }
          case actionTypes.GAME_START_COUNTDOWN :
              return {
                  ...state,
                  gameStart: true,
              }
          case actionTypes.CONTINUE_GAME :
              return {
                  ...state,
                  gameContinue: true
              }
          case actionTypes.FINAL_COMBO :
              return {
                  ...state,
                  finalCombo: action.numbers,
              }
          case actionTypes.MONEY_INPUT_VALID :
              return {
                  ...state,
                  moneyInputInvalid: action.isInvalid,
                  moneyValue: action.moneyValue
              }
          case actionTypes.CURRENT_NUMBER : 
              return {
                  ...state,
                  currentNumber: action.curNum
              }
          case actionTypes.GAME_ENDS :
              return {
                  ...state,
                  gameEnds: true,
                  result: action.result,
                  playButton: true,
              }
          case actionTypes.LUCKY_POSITION :
              return {
                  ...state,
                  luckyPos: action.luckyPos
              }
          case actionTypes.CLOSE_REPORT : 
               return {
                   ...state,
                   gameEnds: null,
               }
          case actionTypes.GAMES_PLAYED :
              return {
                  ...state,
                  gamesPlayed: action.gamesPlayedData
              }
          case actionTypes.MONEY_STAT :
              return {
                  ...state,
                  moneyStat: action.moneyStat
              }
          case actionTypes.LOGIN_USER :
              return {
                  ...state,
                    token: action.token,
                    email: action.email,
                    expiresIn: action.expiresIn,
                    userID: action.userID,
              }
            case actionTypes.LOGIN_USER :
            return {
                ...state,
                    token: null,
                    email: null,
                    expiresIn: null,
                    userID: null,
                }
          case actionTypes.USER_DATA :
                return {
                    ...state,
                    userData: action.data,
                    databaseKey: action.databaseKey
                }
          case actionTypes.NEXT_WIN :
              return {
                  ...state,
                  nextWin: action.nextWin
              }
          case actionTypes.OPEN_NAV :
              return {
                  ...state,
                  navOpen: action.nav
              }
          case actionTypes.CLOSE_NAV :
                return {
                    ...state,
                    navOpen: action.nav
                }
      }
}

export default reducer