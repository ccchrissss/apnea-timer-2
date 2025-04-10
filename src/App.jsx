import React from "react"
// import { ThemeProvider } from 'styled-components'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Clock from "./components/Clock"
import InputsAndPresets from "./components/InputsAndPresets"
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'


function App() {
  return (
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <Clock />
          <InputsAndPresets />
        </Container>
        <Footer />
      </>
  )
}


export default App