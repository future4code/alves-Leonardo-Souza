import React from 'react'
import {useNavigate} from 'react-router-dom'
import ApplicationFormPage from './ApplicationFormPage'

function ListTripsPage() {
  const navigate = useNavigate()

  const acessApply = () => {
    navigate ("/application")
  }
  return (
    <div>
      <h2>Viagens Disponíveis</h2>
      <button onClick={acessApply}>Aplicar-se a esta viagem</button>
    </div>
  )
}

export default ListTripsPage