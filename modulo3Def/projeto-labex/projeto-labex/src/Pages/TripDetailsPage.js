import React, { useEffect, useState } from 'react'
import axios from 'axios'


function TripDetailsPage() {
  const [data, setData] = useState("")  
  const trips = data?.trips 

  useEffect(() => {
    const token = localStorage.getItem('token')
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trip/PESGWw2fPvVkJ0Fda6Ca`
    axios.get(url, {
      headers: {
        auth: token
      }
    }
    )
      .then((res) => {
        console.log(res.data)
        setData(res.data)
        data.map((element) => {
          return <p>{element.trip}</p> 
        })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [])

  return (
    <div>
      <h1>TripDetailsPage</h1>            
    </div>
  )
}

export default TripDetailsPage