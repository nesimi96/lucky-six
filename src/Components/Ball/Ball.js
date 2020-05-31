import React from 'react';
import styled from 'styled-components';

const ball = (props) => {

    return <Ball theme={props.ballStyle}> 
                <div>
                     <h3>{props.ballStyle.num}</h3>
                </div>
           </Ball>
}

export default ball;

const Ball = styled.div`
    border-radius: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    animation: ${props => props.theme.animation};
    ${props => props.theme.style};


    & div {
        background-color: white;
        width: 72.5%;
        height: 72.5%;
        border-radius: 50%; 

        display: flex;
        justify-content: center;
        align-items: center;

        & h3 {
            z-index: 20;
            font-size: 100%;
        }
    }
`;