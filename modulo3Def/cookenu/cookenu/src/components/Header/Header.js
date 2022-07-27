import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import {goToRecipesList, goToLogin} from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom';

export default function Header() {  
  const navigate = useNavigate()
  return (    
      <AppBar position="static">
        <StyledToolbar>          
          <Button onClick={() => goToRecipesList(navigate)} color="inherit">CookeNu</Button>
          <Button onClick={() => goToLogin(navigate)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    
  )
}