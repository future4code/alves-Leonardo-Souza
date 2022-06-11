import React from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutPrincipal from './components/Layout-Principal/LayoutPrincipal'
import HeaderWhatsLab from './components/HeaderWhatsLab/HeaderWhatsLab';




function App() {
  const headerPagina = "WhatsLab"

  return (
    <div className="App">
      <header><HeaderWhatsLab/></header>
      <footer><LayoutPrincipal/></footer>
    </div>
  );
}

export default App;
