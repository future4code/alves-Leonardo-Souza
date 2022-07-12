import React from 'react'
import ListTripsPage from './ListTripsPage'
import AdminHomePage from './AdminHomePage'
import {useNavigate} from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()

  const acessList = () => {
    navigate("trips")
  }

  const acessLogin = () => {
    navigate("login")
  }

  return (
    <div>
    <h2>Home Page</h2>
    <button onClick={acessList}>Lista de Viagens</button>
    <button onClick={acessLogin}>Área Administrativa</button>
    
    </div>
  )
}

export default HomePage