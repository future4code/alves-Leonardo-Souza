import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import styled from "styled-components";





function App() {

  const [telaEscolhida, setTelaEscolhida] = useState(<TelaInicial/>)

  return (
    <div className="App">
      <Header telaEscolhida={telaEscolhida} setTelaEscolhida={setTelaEscolhida}/>
      <div>
      <div>{telaEscolhida}</div>
      </div>   
      <Footer/>   
    </div>
  );
}

export default App;
