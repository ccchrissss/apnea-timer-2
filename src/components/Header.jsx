import { StyledHeader } from './styles/Header.styled'
import { Container } from './styles/Container.styled'

const Header = () => {

  return (
    <StyledHeader>
      <Container>
        <h1>Apnea Timer 2</h1>
        <p>Please make sure to allow autoplay in your browser for this page<br />
        Otherwise the timer's beeps will not be heard.</p>
      </Container>
    </StyledHeader>
  )
}

export default Header