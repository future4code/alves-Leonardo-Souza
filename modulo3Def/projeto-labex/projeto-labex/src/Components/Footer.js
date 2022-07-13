import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
    display: flex;
    border: 2px solid black;
    justify-content: space-around;
    /* position: relative; */
    left: 0; 
    bottom: 0;
    width: 99.7vw;

`

function Footer() {
  return (
    <FooterDiv>
      <h2>Footer do Labex</h2>
    </FooterDiv>
  )
}

export default Footer