import React from "react";
// import { ThemeProvider } from 'styled-components'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Clock from "./components/Clock"
import InputsAndPresets from "./components/InputsAndPresets"
import { Container } from './components/styles/Container.styled'



// const theme = {
//   colors: {
//     header: steelblue,
//     body: white,
//     footer: lightgrey,
//   }
// }

function App() {
  return (
      <>
        <Header />
        <Container>
          <Clock />
          <InputsAndPresets />
        </Container>
        <Footer />
      </>
  )
}


export default App;