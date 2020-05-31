import React from 'react';
import ForbidenSvg from '../../assets/svg/forbidden';
import styled from 'styled-components'

const forbidden = () => {
    return <Forbidden>
                 <h6>Morate biti prijavljeni</h6>
                 <ForbidenSvg />
            </Forbidden>
}

export default forbidden;


const Forbidden = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 20%;


  & h6 {
      font-size: 17px;
      transform: translateY(100%);
  }
 
`;