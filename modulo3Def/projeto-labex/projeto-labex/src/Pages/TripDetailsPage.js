import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function TripDetailsPage() {  
  const [data, setData] = useState("")  
  const params = useParams()

  useEffect((id) => {
    const token = localStorage.getItem('token')
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trip/${params.id}` 
    axios.get(url, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        console.log(res.data.trip)
        setData(res.data.trip)       
      })
      .catch((err) => {
        console.log(err.response)
      })
  },[])

  return (
    <div>
      <h1>Trip Details Page</h1>              
    </div>
  )
}

export default TripDetailsPage

// ****************************** divisão de codigos ****************

// import React, { useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import axios from 'axios'


// export const TripDetailsPage = () => {
//   const navigate = useNavigate()
//   const token = localStorage.getItem('token')
//   const params = useParams()
//   const [detalhe, setDetalhe] = useState({})
//   useEffect(() => {
//       pegaDetalhesViagens()
//   }, [])
//   const pegaDetalhesViagens = () => {
//       const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/olavo-marques-alves/trip/${params.id}`
//       axios.get(url, {
//           headers: {
//               auth: token
//           }
//       })
//           .then((res) => {
//               // console.log(res.data.trip.approved)
//               setDetalhe(res.data.trip)
//           })
//           .catch((err) => {
//               // console.log("Deu err", err.response)
//           })
//   }
//   return (
//       <DivDetalhes>
//               <h1>Detalhes da viagem</h1>
//           <section>
//               <DetalhesViagem>Nome: {detalhe.name}</DetalhesViagem>
//               <DetalhesViagem>Planeta: {detalhe.planet}</DetalhesViagem>
//               <DetalhesViagem>Descrição: {detalhe.description}</DetalhesViagem>
//               <DetalhesViagem>Data: {detalhe.date}</DetalhesViagem>
//               <DetalhesViagem>Dyuração em dias {detalhe.durationInDays}</DetalhesViagem>
//           </section>
//           <button onClick={() => goToAdminHomePage(navigate)} >Voltar</button>
//       </DivDetalhes>
//   )
// }