import styled from 'styled-components'

export const StyledClock = styled.section`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;


  #countdown {
    color: black;
    background-color: #b8b8b8;
    border-radius: 10px;
    display: inline-flex;
    width: 13rem;
    height: 5rem;
    padding: 1rem;
    font-size: 5rem;
    font-family: roboto;
    align-items: center;
    justify-content: center;
    margin: 3rem;
  }

  .timer-btns {
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;
    margin: 1.5rem;
  }
  .timer-btns > * {
    font-size: 1rem;
    flex: 40%;
    min-height: 3rem;
  }
  #start-timer {
    border: solid green;
    border-radius: 10px;
  }
  #stop-timer {
    border: solid red;
    border-radius: 10px;
  }
  #clear-timer {
    border: solid;
    border-radius: 10px;
  }
  #reset-timer {
    border: solid;
    border-radius: 10px;
  }

`