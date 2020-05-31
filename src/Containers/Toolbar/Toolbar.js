import React, { Component } from 'react';
import '../../sass/main.scss';
import Hamburger from '../../Components/Hamburger/Hamburger';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';
import MainLoginButton from '../../Components/MainLogin';

class Toolbar extends Component {

     redirectToStat = () => {
        this.props.history.push('/statistika')
     }

     redirectToBingo = () => {
         this.props.history.push('/')
     }

     redirectToLogin = () => {
         this.props.history.push('/prijava')
     }

    render(){

        return <div className="Toolbar">
                    <div className="Toolbar-hamburger-holder"> 
                         <Hamburger openNav={this.props.openNav}/>
                    </div>
                    <div className="Toolbar-user-area">
                        <MainLoginButton logout={this.props.logout} email={this.props.email}
                         token={this.props.token}
                         goToLogin={this.redirectToLogin}/>
                    </div>
               </div>
    }
}

const mapStateToProps = state => {
    if(state){
        return {
            token: state.token,
            email: state.email,
        }
    }
}

const mapDispatchToProps = dispatch => ({
    openNav: () => dispatch(action.openNavigation()),
    logout: () => dispatch(action.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

