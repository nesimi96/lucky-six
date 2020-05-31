import * as actionTypes from './actionTypes';
import axios from 'axios';
import { act } from '@testing-library/react';

/// ** FETCHING GAMES-PLAYED DATA ** 
const gamePlay = response => {
       return {
           type: actionTypes.GAMES_PLAYED,
           gamesPlayedData: response.data
       }
}

export const gamesPlayed = () => {
    return dispatch => {
            axios.get('https://bingo-c6d2c.firebaseio.com/games-played.json')
            .then(response => dispatch(gamePlay(response)))
            .catch(error => console.log(error))
    }
}

/// ** FETCHING MONEY-STAT DATA ** 
const moneyStat = response => {
    return {
        type: actionTypes.MONEY_STAT,
        moneyStat: response.data
    }
}

export const moneyStatistic = () => {
 return dispatch => {
         axios.get('https://bingo-c6d2c.firebaseio.com/money-stat.json')
         .then(response => dispatch(moneyStat(response)))
         .catch(error => console.log(error))
 }
}

// *** LOG OUT USER ** ///
export const logout = () => {
    localStorage.clear();
    window.location.reload();

    return {
        type: actionTypes.LOGOUT,
    }
}


// ** LOG IN USER ** //

export const setUserToState = () => {


    return {
        type: actionTypes.LOGIN_USER,
        token: localStorage.getItem('token'),
        email: localStorage.getItem('email'),
        expiresIn: localStorage.getItem('expiresIn'),
        userID: localStorage.getItem('userID'),
    }
}

const loginUser = (response) => {

    setTimeout(() => { window.location = "/statistika" }, 500);

    localStorage.setItem('token', response.data.idToken);
    localStorage.setItem('email', response.data.email);
    localStorage.setItem('expiresIn', response.data.expiresIn);
    localStorage.setItem('userID', response.data.localId);
    localStorage.setItem('expireDate', new Date(new Date().getTime() + 60 * 60000));

    return {
        type: 'none'
    }

}

export const login = (email, password) => {
    
    const data = {
        email: email,
        password: password,
        returnSecureToken: true,
    }

    return dispatch => {
          axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCl7B4cT-wb9bgK5Q9BaNqJi4DaebQ0gTU', {...data})
         .then(response => dispatch(loginUser(response)))
         .catch();
    }
}

// *** GET USERS DATA FROM SERVER *** //

const userData = (response) => {
    const databaseKey = Object.keys(response.data);
    const userData = Object.values(response.data)[0];
    return {
        type: actionTypes.USER_DATA,
        data: userData,
        databaseKey: databaseKey[0],
    }
}

export const getUserDataFromServer = (userID) => {
    return dispatch => {
           axios.get(`https://bingo-c6d2c.firebaseio.com/user/${userID}.json`)
           .then(response => dispatch(userData(response)))
           .catch(error => console.log(error))
    }
}

// *** GET "NEXT WIN" DATA FROM DATABASE *** //
const nextWin = (response) => {
    return {
        type: actionTypes.NEXT_WIN,
        nextWin: response.data,
    }
}

export const getNextWinData = () => {
    return dispatch => {
        axios.get('https://bingo-c6d2c.firebaseio.com/next-win.json')
        .then(response => dispatch(nextWin(response)))
        .catch(error => console.log(error))
    }
}

