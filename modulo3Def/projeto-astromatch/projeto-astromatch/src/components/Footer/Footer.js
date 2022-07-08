import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const DivDoFooter = styled.div`
    /* border: orange solid 1px; */
    display: flex;     
    justify-content: space-between;
    width: 100vw;
    height: 10vh;
    position: absolute;
    bottom: 0;
    left: 0; 
    background-color: #FA7A02
`

const limparMatches = () => {
  const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardoCouto/clear`
  axios.put(url)
  .then((res) => {
    console.log("Limpou Histórico")
  })
  .catch((err) => {
    console.log ("err.response")
  })
}


const Footer = (props) => {
  return (
    <DivDoFooter>
    <p>Desenvolvido por Leonardo Couto</p>
    <div>
    <h4>2022</h4>
    </div>
    <button onClick={limparMatches}>Limpar Matches</button>
    </DivDoFooter>
  )
}

export default Footer
