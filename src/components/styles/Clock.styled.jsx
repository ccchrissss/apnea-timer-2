import styled from 'styled-components'

export const StyledClock = styled.section`

  display: flex;


  #countdown {
    color: black;
    background-color: gray;
    border-radius: 10px;
    display: inline-flex;
    width: 13rem;
    height: 5rem;
    font-size: 5rem;
    font-family: roboto;
    align-items: center;
    justify-content: center;
    margin: 3rem;
  }

  .timer-btns {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 10px;
  }

`