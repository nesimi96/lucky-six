import React from 'react';
import styled from 'styled-components'

const button = (props, type) => {

     const style = props.style();

     const methodCalls = (type) => {
        
           if(type === 'analize'){
              props.closeReport();
          }else if(type === 'newGame' || type === 'restartGame'){
              //props.newGame();
              window.location.reload();
          } else if(type === 'startGame'){
              props.areNumbersReady();
          }
     }

    return <Button onClick={() => methodCalls(props.type)} theme={style}>{props.content}</Button>
}

export default button;

const Button = styled.button`
    ${props => props.theme}

`;