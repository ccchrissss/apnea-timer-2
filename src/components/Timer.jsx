import Clock from './Clock'
import InputsAndPresets from './InputsAndPresets'
import { useState } from 'react'

function Timer() {

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))


  const handleOnSetPreset100 = () => {
    setMinutes(1);
    setSeconds((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))
  }
  const handleOnSetPreset020 = () => {
    setMinutes(0);
    setSeconds(20)
  }
  const handleOnSetPreset1010 = () => {
    setMinutes(10);
    setSeconds(10)
  }

  const handleOnSetTime123 = () => {
    setMinutes(1)
    setSeconds((23).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))
  }


  const handleOnSetTimerFromInputs = (e) => {

    e.preventDefault()

    const minsFromForm = +e.target.form[0].value
    const secsFromForm = +e.target.form[1].value

    setMinutes(minsFromForm)
    setSeconds((secsFromForm).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))
  }

  return (
    <>
      <Clock minutes={minutes} seconds={seconds} />
      <InputsAndPresets
        handleOnSetPreset100={handleOnSetPreset100} 
        handleOnSetPreset020={handleOnSetPreset020} 
        handleOnSetPreset1010={handleOnSetPreset1010}
        handleOnSetTime123={handleOnSetTime123} 
        handleOnSetTimerFromInputs={handleOnSetTimerFromInputs} 
      />
    </>

  )
}


export default Timer