import React from 'react';
import styled from 'styled-components'
import Spinner from '../../Components/Spinner/Spinner';

const statisticItem = (props) => {

    let val = null;
    val = props.isThere ? props.value : <Spinner />
    
    return <Item>
               <div className="text-holder">
                    <p style={{justifySelf: 'start',}} className="p-1">{props.header}</p> 
               </div>
               <div className="number-holder">
                    <p className="p-2"> { val } </p>
               </div>
           </Item>
}

export default statisticItem;

const Item = styled.div`
     height: 100%;
     display: grid;
     align-content: center;
     grid-template-columns: 70% 30%;

     @media screen and (max-width: 600px) {
        height: max-content;
      }
      
     .text-holder {
        color: grey;

        display: flex;
        justify-content: start;

        & p {
            margin-left: 10%;
        }
     }

     .number-holder {
        color: black;
        font-weight: 700;

        display: flex;
        justify-content: flex-end;

        & p {
            margin-right: 25%;
        }
     }
     
    
`;