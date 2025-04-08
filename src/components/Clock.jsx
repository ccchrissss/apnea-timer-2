import React from "react"

const CountdownTimer = () => {

  return (
    <p id="countdown">0:00</p>
  )
}

const TimerButtons = () => {

  return (
    <div class="timer-btns">
        <button id="start-timer">Start Timer</button>
        <button id="stop-timer">Stop Timer</button> 
        <button id="clear-timer">Clear Timer</button>
        <button id="reset-timer">Reset To Last Time</button>
    </div>
  )
}

const Clock = () => {

  return (
    <section id="clock-display">
      <CountdownTimer />
      <TimerButtons />
    </section>
  )
}


export default Clock;