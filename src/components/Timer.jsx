import Clock from './Clock'
import InputsAndPresets from './InputsAndPresets'
import { useState } from 'react'

function Timer() {

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))


  return (
    <>
      <Clock minutes={minutes} seconds={seconds} />
      <InputsAndPresets handleOnSetTime123={ () => {
          setMinutes(1)
          setSeconds((23).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))
        }
      }/>
    </>

  )
}


export default Timer