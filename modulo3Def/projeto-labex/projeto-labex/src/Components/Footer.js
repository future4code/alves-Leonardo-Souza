import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
    display: flex;
    display: block;
    text-align: center;    
    color: #AD6C23;
    border: 2px solid #348BAD;
    justify-content: space-around;
    left: 0; 
    bottom: 0;
`

function Footer() {
  return (
    <FooterDiv>
      <h2>Labex 2022</h2>
      <h3>All CopyRigths Reserved</h3>
    </FooterDiv>
  )
}

export default Footer