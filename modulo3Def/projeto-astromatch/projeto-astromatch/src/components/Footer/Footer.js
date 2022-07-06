import React from 'react'
import styled from 'styled-components'

const DivDoFooter = styled.div`
    /* border: 5px solid black; */
    display: flex;     
    justify-content: space-between;
    margin-top: 4vh;
    

`
const Footer = (props) => {
  return (
    <DivDoFooter>
    <p>Desenvolvido por Leonardo Couto</p>
    <div>
    <h1>Footer do Astromatch</h1>
    </div>
    <button>Limpar Matches</button>
    </DivDoFooter>
  )
}

export default Footer
