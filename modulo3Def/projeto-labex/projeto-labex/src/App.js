import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RouterLeonardo from "./Router/RouterLeonardo"
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  display: block;
  background-color: #63D0FA;  
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`

function App() {
  return (
    <AppDiv className="App">
      <Header/>
      <RouterLeonardo/>
      <Footer />
    </AppDiv>
  );
}

export default App;
