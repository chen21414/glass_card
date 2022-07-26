import React from 'react'
import styled from 'styled-components'
import Detail from './detail';
import Sideimage from './sideimage';


const CardContainer = styled.div`
    width: 1100px;
    height: 500px;
    display: flex;
    border-radius: 26px;
    position: relative;
    border: 2px solid #fff;
    background-color: rgba(255,255,255,0.2);
    backdrop-filter:blur(10px);
`;

const NewsLetter = () => {
  return (
    <CardContainer>
        <Detail/>
        <Sideimage/>
    </CardContainer>
  )
}

export default NewsLetter