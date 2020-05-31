import React from 'react';
import styled from 'styled-components';

const gamePlayedColor = (props) => {

    let value = Math.round(props.value)

    return <Item>
               <p>{props.header}</p>
               <h6>{value + "%"}</h6>
               <div style={{
                   backgroundColor: props.color,
               }}></div>
           </Item>
}

export default gamePlayedColor;

const Item = styled.div`

   margin: 1%;
   grid-template-columns: 30% 20% 80px;
   grid-template-rows: repeat(2, 10px);
   display: grid;
   justify-content: center;
   align-items: center;
   
   & p {
       line-height: 0;
       font-size: 11px;
       font-weight: 700;
       color: grey;
   }

   & h6 {
    transform: translateX(-30%);
   }

   & div {
       width: 10px;
       height: 10px;
       transform: translateX(-100%);
   }
   
`;