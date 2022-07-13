import React from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.div`
    display: flex;    
    justify-content: space-around;
    border: 2px solid black;
    /* position: absolute; */
    left: 0; 
    top: 0; 
    width: 99.7vw;
      
`

function Header() {
  return (
    <HeaderDiv>
      <h2>Header do Labex</h2>
    </HeaderDiv>
  )
}

export default Header