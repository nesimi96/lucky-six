import React, { Component } from 'react';
import '../../sass/main.scss';
import axios from 'axios';

class Register extends Component {

      state = {
          email: '',
          password: '',
      }

    inputValue = (type, e) => {
       if(type === 'email'){ this.setState({email: e.target.value}) }
       else if(type === 'pass') { this.setState({password: e.target.value}) }
    }

    registerUser = () => {


        //Check pass validation from developer
        const registerPassErrors = this.checkPasswordValidation();
        const hasErrorFromUser = registerPassErrors.find(cur => cur ? cur : null);

        if(hasErrorFromUser){
            this.props.setSignError(hasErrorFromUser);
        }else {
            const data = {
                email: this.state.email,
                password: this.state.password,
                returnSecureToken: true,
            }
     
         axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCl7B4cT-wb9bgK5Q9BaNqJi4DaebQ0gTU', {...data})
               .then(response => {
                this.props.succes('Uspješno ste registrovani');
                this.registerUserInDataBase(response);
                this.props.handleMode('login');
                this.setState({key13Registered: true,})
               })
               .catch((error) => {
                 this.props.setSignError(error.response.data.error.message);
                 });
         }

        }



    registerUserInDataBase = (response) => {

        const gameData = {
            wonGames: 0,
            lostGames: 0,
            moneyInc: 0,
            moneyExp: 0,
            bilans: 0,
            bestScore: 0,
        }

        axios.post(`https://bingo-c6d2c.firebaseio.com/user/${response.data.localId}.json`, {...gameData})
        .then(response => console.log())
        .catch(error => console.log(error))
    }

    checkPasswordValidation = () => {
        const password = this.state.password;
        const errors = [];
        const bigLetter = new RegExp('\w*[A-Z]');
        const numbers = new RegExp('\w*[0-9]')
        
        errors[0] = password.length < 6 ? 'Password mora imati minimalno 6 slova' : null;
        errors[1] = bigLetter.test(password) ? null : 'Password mora sadržavati velika slova';
        errors[2] = numbers.test(password) ? null : 'Password mora sadržavati najmanje jedan broj';
 
        return errors;
    }

 
    render(){

      
        return <form className="Login-Register">
                    <input onChange={(e) => this.inputValue('email', e)} type="email" placeholder="e-mail adresa"/> 
                    <input onChange={(e) => this.inputValue('pass', e)} type="password" placeholder="vaša sifra"/>
                    <button type="button" onClick={() => this.registerUser()}> REGISTER</button>
                    <div className="Login-Register-text">
                        <p className="Login-Register-text-1">Niste prijavljeni?</p>
                        <p onClick={() => this.props.handleMode('login')} className="Login-Register-text-2"> Prijavi se </p>
                    </div>
               </form>
    }
}

export default Register;