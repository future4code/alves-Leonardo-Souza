import React from 'react'
import ListTripsPage from './ListTripsPage'
import {useNavigate} from 'react-router-dom'

function AdminHomePage() {

  const navigate = useNavigate()

  const acessTripDetails = () => {
    navigate ("/details")
  }

  const acessCreateTrip = () => {
    navigate ("/create")
  }

  return (
    <div>
      <h2>Bem vindo Adm</h2>
      <ListTripsPage/>
      <button>Deletar Viagem</button>
      <button onClick={acessTripDetails}>Detalhes da Viagem</button>
      <button onClick={acessCreateTrip}>Criar Nova Viagem</button>
      </div>
  )
}

export default AdminHomePage