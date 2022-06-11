import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
    display: flex;
    color: orange;
    justify-content: center;
    position: relative;

    
`
const HeaderWhatsLab = () => {
    
    
    return (
        <div className='Cabecalho'>
        <div>
        <Titulo>WhatsLab</Titulo> 
        </div>        
        </div>
    )
}

export default HeaderWhatsLab