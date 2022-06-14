// import logo from './logo.svg';
// import './App.css';

function Etapa1() {
  return (
    <div className="Etapa1">
      <h1>Etapa 1 - Dados Gerais</h1>
      <h2>1. Qual o seu nome?</h2>
      <input></input>
      <h2>2. Qual sua idade?</h2>
      <input></input>
      <h2>3. Qual seu email?</h2>
      <input></input>
      <h2>4. Qual sua escolaridade?</h2>
      <select name="Escolha aqui:">
        <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
        <option value="Ensino Médio Completo">Ensino Médio Completo</option> 
        <option value="Ensino Superio Incompleto">Ensino Superio Incompleto</option>
        <option value="Ensino Superior Completo">Ensino Superior Completo</option>
      </select>
    </div>
  );
}

export default Etapa1;
