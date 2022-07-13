import React from 'react'
import ListTripsPage from './ListTripsPage'
import AdminHomePage from './AdminHomePage'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const HomeDiv = styled.div `
  border: solid 1px red;
  display: flex;
  display: inline;  
  width: 99.8vw;  
`

function HomePage() {
  const navigate = useNavigate()

  const acessList = () => {
    navigate("trips")
  }

  const acessLogin = () => {
    navigate("login")
  }

  return (
    <HomeDiv>
    <h2>Home Page</h2>
    <button onClick={acessList}>Lista de Viagens</button>
    <button onClick={acessLogin}>Área Administrativa</button>
    
    </HomeDiv>
  )
}

export default HomePage