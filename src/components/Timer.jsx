import Clock from './Clock'
import InputsAndPresets from './InputsAndPresets'
import { useState } from 'react'


function Timer() {

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))
  const [lastMinutes, setLastMinutes] = useState(0)
  const [lastSeconds, setLastSeconds] = useState(0)


  const handleOnSetPreset100 = () => {
    setMinutes(1);
    setSeconds((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))

    setLastMinutes(1);
    setLastSeconds((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))
  }
  const handleOnSetPreset020 = () => {
    setMinutes(0);
    setSeconds(20)

    setLastMinutes(0);
    setLastSeconds(20)
  }
  const handleOnSetPreset1010 = () => {
    setMinutes(10);
    setSeconds(10)

    setLastMinutes(10);
    setLastSeconds(10)
  }

  const handleOnSetTimerFromInputs = (e) => {

    e.preventDefault()

    const minsFromForm = +e.target.form[0].value
    const secsFromForm = +e.target.form[1].value

    setMinutes(minsFromForm)
    setSeconds((secsFromForm).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))

    setLastMinutes(minsFromForm)
    setLastSeconds((secsFromForm).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))

    // console.log(typeof minutes)
    // console.log(typeof seconds)
  }



  const handleClearTimer = () => {
    setMinutes(0)
    setSeconds((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))
  }

  const handleResetTimerToLast = () => {
    setMinutes(lastMinutes)
    setSeconds(lastSeconds)
  }

  return (
    <>
      <Clock 
        minutes={minutes} seconds={seconds} 
        handleClearTimer={handleClearTimer}
        handleResetTimerToLast={handleResetTimerToLast}
      />
      <InputsAndPresets
        handleOnSetPreset100={handleOnSetPreset100} 
        handleOnSetPreset020={handleOnSetPreset020} 
        handleOnSetPreset1010={handleOnSetPreset1010}
        handleOnSetTimerFromInputs={handleOnSetTimerFromInputs} 
      />
    </>

  )
}


export default Timer