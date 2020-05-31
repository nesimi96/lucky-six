import React, { Component } from 'react';
import styled from 'styled-components';
import Spinner from '../Spinner/Spinner';

class Analytics extends Component {
    render(){

        let analytics = null;
        analytics = this.props.analyticsWon || this.props.analyticsLost ? <React.Fragment>
               <AnalyticHolder theme={this.props} >
                   <div style={{backgroundColor: 'aqua'}} className="first"></div>
                   <div style={{backgroundColor: 'red'}} className="second"></div>
               </AnalyticHolder>
        </React.Fragment> : <Spinner noMargin={true}/>;

        return analytics;

    }
}

export default Analytics;

const AnalyticHolder = styled.div`
     //background-color: black;
     width: 120px;
     height: 40px;
     border: 1px solid #dadce0;
     overflow: hidden;
     justify-self: end;
     box-shadow: 0 1px 20px 0 rgba(32,33,36,0.28);

     display: grid;
     grid-template-columns: ${props => props.theme ? `${props.theme.analyticsWon}% ${props.theme.analyticsLost}%` : '30% 70%'};
     color: white;

     & div {
        display: flex;
        justify-content: center;
        align-items: center;

        display: ${props => props.theme.analyticsWon || props.theme.analyticsLost ? `flex` : 'none'};
     }

`;