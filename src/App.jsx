import styled from "styled-components";
import Contact from "./components/Contact";
import Header from "./components/Header";
import About from "./components/About";
import Works from "./components/Works";
import backgroundImage from './img/bg.jpeg';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url(${backgroundImage}); 
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Header id="home"/>
      <About id="about" />
      <Works id="works" />
      <Contact id="contact" />
    </Container>
  );
}

export default App;