import React from 'react';
import styled from 'styled-components'

const spinner = () => {
    return <SpinnerStyle>
              <div></div><div></div><div></div><div></div>
          </SpinnerStyle>
}

export default spinner;

const SpinnerStyle = styled.div`

    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
    margin-right: 25%;
  
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    margin: 8px;
    border: 1.5px solid #eee;
    border-radius: 50%;
    animation: lds-ring 1.1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #333 transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring{
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`;

