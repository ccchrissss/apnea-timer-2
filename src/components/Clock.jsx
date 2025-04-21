// Importing React is no longer needed as of React 17. 
// import React from "react"
import { StyledClock } from './styles/Clock.styled'


const CountdownTimer = ({ minutes, seconds }) => {

  return (
    <>
      <p id="countdown">{minutes}:{seconds}</p>
      <div class="break"></div>
    </>
  )
}

const TimerButtons = ({ onClearTimer, onResetTimerToLast }) => {

  return (
    <div class="timer-btns">
        <button id="start-timer">Start</button>
        <button id="stop-timer">Stop</button>
        {/* <div class="break"></div> */}
        <button id="clear-timer" onClick={onClearTimer}>Clear </button>
        <button id="reset-timer" onClick={onResetTimerToLast}>Reset to Last</button>
    </div>
  )
}

const Clock = ({ minutes, seconds, handleClearTimer, handleResetTimerToLast }) => {

  return (
    <StyledClock>
      <CountdownTimer minutes={minutes} seconds={seconds} />
      <TimerButtons 
        onClearTimer={handleClearTimer} 
        onResetTimerToLast={handleResetTimerToLast} 
      />
    </StyledClock>
  )
}


export default Clock;