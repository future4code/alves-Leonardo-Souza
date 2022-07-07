import axios from 'axios'
import React from 'react'

const mostrarMatches = () => { 
  const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardoCouto/matches`
  axios.get(url)
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log("entrou no catch")
  })
}


function TelaMatches(props) {
  return (
    <div>
    Tela Matches
    <div>
      <button onClick={mostrarMatches}>Mostrar</button>
      </div>
    
    </div>
  )
}

export default TelaMatches