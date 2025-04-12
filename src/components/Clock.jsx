// Importing React is no longer needed as of React 17. 
// import React from "react"
import { StyledClock } from './styles/Clock.styled'


const CountdownTimer = () => {

  return (
    <>
      <p id="countdown">0:00</p>
      <div class="break"></div>
    </>
  )
}

const TimerButtons = () => {

  return (
    <div class="timer-btns">
        <button id="start-timer">Start</button>
        <button id="stop-timer">Stop</button>
        {/* <div class="break"></div> */}
        <button id="clear-timer">Clear </button>
        <button id="reset-timer">Reset to Last</button>
    </div>
  )
}

const Clock = () => {

  return (
    <StyledClock>
      <CountdownTimer />
      <TimerButtons />
    </StyledClock>
  )
}


export default Clock;