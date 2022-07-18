import React from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.div`
    display: flex;    
    justify-content: space-around;
    border: 2px solid #348BAD;
    color: #AD6C23;
    font-size:x-large;
    left: 0; 
    top: 0; 
      
`

function Header() {
  return (
    <HeaderDiv>
      <h2>LabeX</h2>
    </HeaderDiv>
  )
}

export default Header