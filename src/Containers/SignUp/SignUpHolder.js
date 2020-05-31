import React, { Component } from 'react'
import '../../sass/main.scss';
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
import AlertBox from '../../Components/AlertBox/AlertBox';

class SignUpHolder extends Component {


    state = {
        signingMode: 'login',
        singErrors: null,
        succes: null,
    }

    handleMode = (type) => {
       this.setState({signingMode: type})
    }

    setSignError = (type) => {
      
        if(type === 'EMAIL_EXISTS'){ this.setState({singErrors: 'E-mail adresa se već koristi'}) }
        else if(type === 'MISSING_EMAIL'){ this.setState({singErrors: 'Unesite e-mail adresu'}) }
        else if(type === 'INVALID_EMAIL'){ this.setState({singErrors: 'Unos e-mail adrese nije validan'}) }
        else if(type === 'EMAIL_NOT_FOUND'){ this.setState({singErrors: 'E-mail adresa nije pronađena'}) }
        else if(type === 'INVALID_PASSWORD'){ this.setState({singErrors: 'Pogrešan password'}) }
        else if(type === 'TOO_MANY_ATTEMPTS_TRY_LATER : Too many unsuccessful login attempts. Please try again later.'){
            { this.setState({singErrors: 'Previše pokušaja. Pokušajte kasnije ponovo...'}) }
        }
        else if(type){ this.setState({singErrors: type}) }
        else if(type === 'succes'){ this.setState({singErrors: null}) }
    
    }

    succes = (type) => {
        this.setState({registerSucces: type, singErrors: null})
    }

    render(){

        let alert = null;
        alert = this.state.singErrors || this.state.registerSucces ? <AlertBox style={alertBox}
         message={this.state.singErrors ? this.state.singErrors : this.state.registerSucces} state={this.state}/>
        : null;

        return <div className="SignUpHolder">
                    <div className="SignUpHolder-box">     
                            <div style={{
                        transform: this.state.signingMode === 'register' ? 'rotateY(-180deg)' : '',
                            }} className="card SignUpHolder-box-front">
                                 <Login succes={this.succes} setSignError={this.setSignError} handleMode={this.handleMode} />
                            </div>
                            <div style={{
                        transform: this.state.signingMode === 'register' ? 'rotateY(0)' : '',
                            }} className="card SignUpHolder-box-back">
                                 <Register succes={this.succes} setSignError={this.setSignError} handleMode={this.handleMode} />
                            </div>
                            { alert }
                    </div>
               </div>
    }
}

export default SignUpHolder;


export const alertBox = () => {
    return `
        position: absolute;
        bottom: -25%;
        z-index: 500;
        width: max-content;
        height: max-content;
        padding: 10px 20px;
        font-weight: 600;
        font-size: 13px;
        color: black;
        border: 1.3px solid black;
        border-radius: 3px;

        display: flex;
        align-items: center;
    `;
}