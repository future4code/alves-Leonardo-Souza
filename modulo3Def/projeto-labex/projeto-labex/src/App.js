import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RouterLeonardo from "./Router/RouterLeonardo"
import styled from "styled-components";

const AppDiv = styled.div`
  /* border: solid 3px blue; */
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height:100vh
`

function App() {
  return (
    <AppDiv className="App">
      <Header />
      <RouterLeonardo />
      <Footer />
    </AppDiv>
  );
}

export default App;
