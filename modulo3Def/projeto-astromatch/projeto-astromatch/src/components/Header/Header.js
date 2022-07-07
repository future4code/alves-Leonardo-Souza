import React from 'react'
import TelaInicial from '../TelaInicial/TelaInicial'
import TelaMatches from '../TelaMatches/TelaMatches'
import styled from 'styled-components'

const DivDoHeader = styled.div`
    /* border: 5px solid black; */
    display: flex;
    justify-content: space-between;
    width: 99vw;
    height: 100px;
    top: 0;
    left: 0; 
`

const Header = (props) => {
   return (
    <DivDoHeader>
        <button onClick={() => props.setTelaEscolhida(<TelaInicial/>) }>Ir Para Home!</button>
        <h1>Header do Astromatch</h1>
        <button onClick={() => props.setTelaEscolhida(<TelaMatches/>) }>Ir Para Matches</button>        
    </DivDoHeader>  
  )
}

export default Header