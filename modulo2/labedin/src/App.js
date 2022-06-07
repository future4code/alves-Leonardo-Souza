import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';



function App() {
  return (
    <div className="App">
      <div>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fsdu9-1.fna.fbcdn.net/v/t1.6435-9/80586930_3816872898326608_2287726923058511872_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGGDHUv1i0MwEVXvlw4HHYFCUrKpXO45UoJSsqlc7jlSv5Ka112QDaG6q-4C_KOLaFdLD3wc5c6GI8YEZltw7KB&_nc_ohc=cYZXPwoA5tQAX8zUgl7&_nc_ht=scontent.fsdu9-1.fna&oh=00_AT-q-jj1_q4n7r-jKEMli9xq-QPZrf2_vGr_faWaHY5Wsw&oe=62C6338C" 
          nome="Leonardo Couto" 
          descricao="Oi, eu sou o Leonardo Couto, atualmente sou aluno da Labenu, porém, já desempenhei funções nas área hoteleira e na área de restaurantes. "
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/2026/2026596.png" 
          texto="Ver mais"
        />
      </div>
      
      <div className="page-section-container">
          <CardPequeno
          primeiraInfo="Email"
          segundaInfo="leonardojcsl@gmail.com" 
          /> 
      </div>
      <div className="page-section-container">
          <CardPequeno
          primeiraInfo="Endereço"
          segundaInfo="Rua José Caetano" 
          /> 
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://scontent.fsdu9-1.fna.fbcdn.net/v/t1.18169-9/17191459_1334832013206150_7850513880822131473_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHsH6v03AWzg37bm8WCWpAdca6e8r4JRIBxrp7yvglEgAoMNgVV510KhdSx6F-B5VqNbPqR0nAP3AuvAAi5MyPi&_nc_ohc=B0n4OqO9f7YAX83aASM&_nc_oc=AQkOAvcg-hoIdRX3VQ2WTG7cp8dV7uSwIhMM8cqvDUyapSx_lIFBTMkRVYo-3rhjmFnlA3Soq9WLe7LENaOEwVoy&_nc_ht=scontent.fsdu9-1.fna&oh=00_AT86yzZ0oDFImuzilLKA0cQ9twmI_5ZfJiWTUCKIMwRZHQ&oe=62C41B1B" 
          nome="Hotel Solar do Amanhecer" 
          descricao="Experiência de três anos no ramo da hotelaria conciliando recepção e setor de reservas" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
