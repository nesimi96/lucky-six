import React, { Component } from 'react';
import '../sass/main.scss';
import UserIcon from '../assets/user';

class mainLogin extends Component {

    state = {
        logoutBox: false,
    }

    toggleLogoutBox = () => {
        this.setState(prevState => ({logoutBox: !prevState.logoutBox }))
    }

    closeLogoutBoxFromAnywhere = (e) => {

        const mainLogout = document.getElementById('MainLogout');
        const logOutBox = document.getElementById('MainLogout-logout-box');
        
        if(e.target !== mainLogout && e.target !== logOutBox){
            this.setState({logoutBox: null})
        }
    }

    render(){

        window.addEventListener('click', this.closeLogoutBoxFromAnywhere)
         
        let logoutBox = null;
        logoutBox = this.state.logoutBox ? <div onClick={() => this.props.logout()} id="MainLogout-logout-box" className="MainLogout-logout-box">
                                                    <UserIcon logoutColor="rgb(63, 62, 62)"/>
                                                <p>LOGOUT</p>
                                            </div> : null;
        
        let logoutBtn = <div onClick={this.toggleLogoutBox} id="MainLogout" className="MainLogout">
                        {this.props.email}
                        { logoutBox }
                    </div>

         
         let loginBtn = <div className="MainLogin"
                 onClick={this.props.goToLogin}>
                   <div className="MainLogin-user">
                        <UserIcon />
                   </div>
                   <div className="MainLogin-text">
                        <p>PRIJAVA</p>
                   </div>
               </div>

         let renderButton = null;
         renderButton = this.props.token ? logoutBtn : loginBtn;

         
        return renderButton
    }
}

export default mainLogin;



