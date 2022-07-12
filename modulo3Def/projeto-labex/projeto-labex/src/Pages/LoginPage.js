import React from 'react'
import {useNavigate} from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  const acessAdminArea = () => {
    navigate("/admin")
  }
  return (
    <div>
      <h2>Página de Login</h2>
      <input placeholder='Login'></input> 
      <input placeholder='Senha'></input>
      <button onClick={acessAdminArea}>Acessar</button>
     
    </div>
  )
}

export default LoginPage