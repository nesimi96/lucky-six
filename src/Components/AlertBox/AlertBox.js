import React from 'react';
import styled from 'styled-components';

const alertBox = (props) => {
      const width = window.innerWidth;
      const style = props.style();
      let backgroundColor = null;

      if(props.state.alertBox || props.state.numberInvalid || props.state.singErrors) {  backgroundColor = 'salmon' }
      else if(props.state.gameStart || props.state.registerSucces) { backgroundColor = 'green' }

      if(props.state.singErrors && props.message === 'Autentikacija u tijeku...'){
          backgroundColor = 'grey';
      }

     return <AlertBox theme={style} backgroundColor={backgroundColor} >{props.message}</AlertBox>
}

export default alertBox;

const AlertBox = styled.div`
    
    background-color: ${props => props.backgroundColor};
    ${props => props.theme}

`;
