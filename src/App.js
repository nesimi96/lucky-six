import React, { Component } from 'react';
import './App.scss';
import Toolbar from './Containers/Toolbar/Toolbar';
import Bingo from './Containers/Bingo/Bingo';
import InputManagment from './Containers/InputManagment/InputManagment';
import { Route, Switch } from 'react-router-dom';
import Statistics from './Containers/Statistics/Statistics';
import { connect } from 'react-redux';
import * as action from './store/actions/index';
import Navigation from './Containers/Navigaton/Navigation';
import Backdrop from './Components/Backdrop/Backdrop';
import SignUpHolder from './Containers/SignUp/SignUpHolder';
import UtilityLayout from './Containers/UtilityLayout/UtilityLayout';
import Rules from './Components/Rules/Rules';
import Faq from './Components/Rules/Faq';

class App extends Component {


    componentDidMount(){
      this.props.loginUser();

    // After 60 minutes, delete user from localStorage..
    const expiresDate = localStorage.getItem('expireDate');
    const date = new Date();
    const newDate = new Date(date.getTime());

    if(new Date(newDate) > new Date(expiresDate)) {
      localStorage.clear();
    }

    }
    
    render(){
      
      let backdrop = null;
      backdrop = this.props.navOpen ? <Backdrop closeNav={this.props.closeNav} /> : null;
      
      return  <div className="App">
              { backdrop }
              <Navigation closeNav={this.props.closeNav} navOpen={this.props.navOpen}/>
              <Switch>
                 <Route exact path="/statistika" render={ props => {
                    return <React.Fragment>
                              <Toolbar {...props} /> 
                              <Statistics />
                      </React.Fragment>
                 }}/>

                <Route exact path="/" render={ props => {
                         return <React.Fragment>
                                   <Toolbar {...props}/>
                                   <Bingo />
                                   <InputManagment />
                                 </React.Fragment>
                           }} />
                
                <Route exact path="/prijava" render={() => {
                  return <SignUpHolder />
                }} />

                <Route exact path="/pravila" render={ props => {
                                    return <React.Fragment>
                                                <UtilityLayout {...props}>
                                                    <Rules />
                                                </UtilityLayout>
                                          </React.Fragment>
                                }}/>
                <Route exact path="/faq" render={ props => {
                                     return <React.Fragment>
                                     <UtilityLayout {...props}>
                                          <Faq />
                                     </UtilityLayout>
                               </React.Fragment>
                                }}/>
            
              </Switch>
              </div>
  }
}

const mapStateToProps = state => {
     if(state){
       return {
         navOpen: state.navOpen
       }
     }
}

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(action.setUserToState()),
  closeNav: () => dispatch(action.closeNavigation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
