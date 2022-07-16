import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

function AdminHomePage() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const params = useParams()

  const [data, setData] = useState("")
  const trips = data?.trips 

  useEffect(() => {
    const token = localStorage.getItem('token')
      if (token === null){
        navigate("/login")
      }
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trips"
    axios.get(url)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        alert(err.response)
      })
  }, [])
  
  const acessTripDetails = (id) => {
    navigate (`/details/${id}`)
    console.log(id)    
  }
  const acessCreateTrip = () => {
    navigate ("/create")
  }

    const deleteTrip = (id) => {
    console.log("Clicou!")       
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trips/${params.id}`
    axios.delete(url, {
      headers:{
        auth: token
      }})
      .then((res) => {
        console.log(id)
        console.log(res.data)
        alert("Viagem deletada!")
      })
      .catch((err) => {
        console.log(err.response)
        alert("Erro!") 
     })       
  }
  
  const listOfTrips = trips?.map((element) => {
    return <div key={element.id}>       
      <div>
        <p>Nome: {element.name}</p>
        <p>Planeta: {element.planet}</p>
        <p>Descrição: {element.description}</p>
        <p>Data de Partida: {element.date}</p>
        <p>Duração da Viagem: {element.durationInDays}</p>
        <button onClick={() => deleteTrip(element.id)}>Deletar Viagem</button>
        <button onClick={() => acessTripDetails(element.id)}>Detalhes da Viagem</button>
                
      </div>      
    </div>
  })
  
  
  //---------------------------------------- 
  return (
    <div>
      <h2>Bem vindo Adm</h2>
      <main>{listOfTrips} </main>
      <div>    
      <button onClick={acessCreateTrip}>Criar Nova Viagem</button>
      </div>
      </div>
  )
}

export default AdminHomePage