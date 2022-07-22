import React from 'react'
import ListTripsPage from './ListTripsPage'
import AdminHomePage from './AdminHomePage'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const HomeDiv = styled.div`  
    display: flex;   
    flex-direction: column;
    justify-content: space-around;
    padding: 0 35% 0 35%;
  `
const AcessDiv = styled.div`
  color: #AD6C23; 
  display: flex;
  flex-direction: column;
  text-align: center;
`
const WritingDiv = styled.div`
  color: #AD6C23; 
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  font-size: large;
`
const HomePageButtons = styled.button`
  color: #AD6C23;
  width: 40%;
  margin: 0% 30% 5% 30%;
  text-align: center;
  align-items: center;
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
      <WritingDiv>
        <h2>Home Page</h2>
        <p>Cansado das mesmas viagens de sempre? Você não aguenta mais Disney, Rio de Janeiro, Guarujá ou Paris?
          Considere-se uma pessoa sem problemas a partir de agora. Com a LabeX, proporcionamos viagens que você jamais esperou fazer
          e de quebra ainda vai deixar seu cunhado Faria-Limer morrendo de inveja.
        </p>
        <p> Nossa agência visa uma experiência limpa e prazerosa pra você que quer viajar ou apenas conhecer nossas viagens. Vem com a gente!</p>
      </WritingDiv>
      <AcessDiv>
        <h2>O que você deseja?</h2>
        <HomePageButtons onClick={acessList}>Ver Lista de Viagens</HomePageButtons>
        <HomePageButtons onClick={acessLogin}>Acessar Área Administrativa</HomePageButtons>
      </AcessDiv>

    </HomeDiv>
  )
}

export default HomePage