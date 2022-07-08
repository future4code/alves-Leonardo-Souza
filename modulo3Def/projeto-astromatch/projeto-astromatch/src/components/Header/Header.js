import React from 'react'
import TelaInicial from '../TelaInicial/TelaInicial'
import TelaMatches from '../TelaMatches/TelaMatches'
import styled from 'styled-components'

const DivDoHeader = styled.div`
    background-color: #FA7A02;
    display: flex; 
    width: 100vw;
    height: 12vh;
    justify-content: space-between; 
    position: absolute;
    top: 0;
    left: 0; 
    text-align: center;
`

const HeaderDoAstromatch = styled.h1`
  color: #7A4F26;
  margin-bottom: 2vh;
`

const Header = (props) => {
   return (
    <DivDoHeader>
        <button onClick={() => props.setTelaEscolhida(<TelaInicial/>) }>Ir Para Home!</button>
        <HeaderDoAstromatch>Astromatch</HeaderDoAstromatch>
        <button onClick={() => props.setTelaEscolhida(<TelaMatches/>) }>Ir Para Matches</button>        
    </DivDoHeader>  
  )
}

export default Header