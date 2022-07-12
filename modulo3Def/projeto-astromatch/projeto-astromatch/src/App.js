import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import styled from "styled-components";

const DivDoApp = styled.div`
  background-color: #FA7A02
`



function App() {

  const [telaEscolhida, setTelaEscolhida] = useState(<TelaInicial/>)

  return (
    <div className="App">
      <DivDoApp>
      <Header telaEscolhida={telaEscolhida} setTelaEscolhida={setTelaEscolhida}/>
      <div>
      <div>{telaEscolhida}</div>
      </div>   
      <Footer/>  
      </DivDoApp> 
    </div>
  );
}

export default App;
