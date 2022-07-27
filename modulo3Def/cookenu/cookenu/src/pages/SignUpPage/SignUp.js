import React from 'react'
import { ButtonDiv, InputsDiv, LogoImage, MainDiv } from './styled'
import logo from '../../Images/logo.png'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import { Button } from '@material-ui/core'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'
import { useNavigate } from 'react-router-dom'


export default function SignUp() {
  const [form, onChange, clear] = useForm({name: "", email: "", password: "" })
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()    
  }

  return (
    <MainDiv>
      <LogoImage src={logo} />
      <InputsDiv>
        <form onSubmit={onSubmitForm}>
        <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome Completo"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required            
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            Efetuar Cadastro!
          </Button>
        </form>
      </InputsDiv>
    </MainDiv>
  )
}
