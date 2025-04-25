// Importing React is no longer needed as of React 17. 
// import React from "react"
import { StyledClock } from './styles/Clock.styled'


const CountdownTimer = ({ minutes, seconds }) => {

  return (
    <>
      <p id="countdown">{minutes}:{seconds}</p>
      <div className="break"></div>
    </>
  )
}

const TimerButtons = ({ onStartTimer, onStopTimer, onClearTimer, onResetTimerToLast }) => {

  return (
    <div className="timer-btns">
        <button id="start-timer" onClick={onStartTimer}>Start</button>
        <button id="stop-timer" onClick={onStopTimer}>Stop</button>
        {/* <div className="break"></div> */}
        <button id="clear-timer" onClick={onClearTimer}>Clear </button>
        <button id="reset-timer" onClick={onResetTimerToLast}>Reset to Last</button>
    </div>
  )
}

const Clock = ({ minutes, seconds, handleStartTimer, handleStopTimer, handleClearTimer, handleResetTimerToLast }) => {

  return (
    <StyledClock>
      <CountdownTimer minutes={minutes} seconds={seconds} />
      <TimerButtons 
        onStartTimer={handleStartTimer}
        onStopTimer={handleStopTimer}
        onClearTimer={handleClearTimer} 
        onResetTimerToLast={handleResetTimerToLast} 
      />
    </StyledClock>
  )
}


export default Clock;