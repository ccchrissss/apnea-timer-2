import Clock from './Clock'
import InputsAndPresets from './InputsAndPresets'
import { useState } from 'react'

function Timer() {

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  

  return (
    <>
      <Clock />
      <InputsAndPresets />
    </>

  )
}


export default Timer