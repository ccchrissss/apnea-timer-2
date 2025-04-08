import React from "react";
import Header from "./components/Header"
import Clock from "./components/Clock";
import InputsAndPresets from "./components/InputsAndPresets"
import { Container } from './components/styles/Container.styled'

function App() {
  return (
    <>
      <Header />
      <Container>
        <Clock />
        <InputsAndPresets />
      </Container>
    </>
  )
}


export default App;