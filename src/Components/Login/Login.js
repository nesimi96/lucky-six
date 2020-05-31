import React, { Component } from 'react';
import '../../sass/main.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';

class Login extends Component {

      state = {
          email: '',
          password: '',
        }
        
        inputValue = (type, e) => {
            if(type === 'email'){ this.setState({email: e.target.value}) }
            else if(type === 'pass') { this.setState({password: e.target.value}) }
         }

         // ONLY FOR DISPLAYING ON UI IF USER IS LOGGED...
       authUser = () => {
            const data = {
                email: this.state.email,
                password: this.state.password,
                returnSecureToken: true,
            }
        
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCl7B4cT-wb9bgK5Q9BaNqJi4DaebQ0gTU', {...data})
            .then(response => this.props.succes('Uspješno ste prijavljeni'))
            .catch(error => this.props.setSignError(error.response.data.error.message) );
    }

    methodCalls = () => {
        this.props.setSignError('Autentikacija u tijeku...')
        this.props.loginUser(this.state.email, this.state.password);
        this.authUser();
    }


    render(){

        if(this.state.email || this.state.password){
            window.addEventListener('keyup', (e) => {
                if(e.keyCode === 13){ this.methodCalls() };
            })
        }


        return <form className="Login-Register">
                    <input onChange={(e) => this.inputValue('email', e)} type="email" placeholder="e-mail adresa" /> 
                    <input onChange={(e) => this.inputValue('pass', e)} type="password" placeholder="šifra"/>
                    <button type="button" onClick={() => this.methodCalls()}
                    onKeyUp={() => console.log('hey')} > LOGIN</button>
                    <div className="Login-Register-text">
                        <p className="Login-Register-text-1">Niste registrovani?</p>
                        <p onClick={() => this.props.handleMode('register')} className="Login-Register-text-2"> Registruj se </p>
                    </div>
               </form>
    }
}

const mapDispatchToProps = dispatch => ({
    loginUser: (email, password) => dispatch(action.login(email, password)),
})

export default connect(null, mapDispatchToProps)(Login);