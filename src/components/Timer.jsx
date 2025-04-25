import Clock from './Clock'
import InputsAndPresets from './InputsAndPresets'
import { useState, useRef, useEffect } from 'react'


function Timer() {

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))
  // const [time, setTime] = useState(0)
  const [lastMinutes, setLastMinutes] = useState(0)
  const [lastSeconds, setLastSeconds] = useState((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))

  let time = minutes * 60 + +seconds
  const intervalRef = useRef(0)
  let timerStatus = 'off'




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


  const handleStartTimer = () => {

    // console.log('start timer')

    if (timerStatus === 'on') {

        timerStatus = 'on'

    } else if (timerStatus === 'off') {

        const intervalId = setInterval(updateCountdown, 1000)

        // console.log('startTimerBtn clicked, startTimer function executed')
        // console.log('intervalId: ', intervalId)

        intervalRef.current = intervalId
        
        // if (time > 0) {
        //     doubleBeep.play()
        // }
        
        // console.log('timerId', timerId)

        timerStatus = 'on'

    }

    console.log(timerStatus)
  }

  const updateCountdown = () => {

    const intervalId = intervalRef.current

    // console.log('updateCountdown')

    if (time > 0) {

        time--
        // console.log(time);

        // console.log('intervalId: ', intervalId)
        // console.log('counting')

        let mins = Math.floor(time / 60);
        let secs = time % 60;
        // console.log(`minutes: ${minutes}  |  seconds: ${seconds}`)

        setMinutes(mins)
        setSeconds((secs).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))

    } else {

        console.log(time)

        console.log(timerStatus)

        if (intervalId) {
            // console.log('timer has ended. clearing interval', intervalId)

            clearInterval(intervalId);
            // handleStopTimer()

            // console.log(timerStatus)

            // clearTimer()
        }
    }
  }

  const handleStopTimer = () => {

    // timerStatus = 'off'
    const intervalId = intervalRef.current
    // console.log('intervalId: ', intervalId)

    clearInterval(intervalId);

    console.log(timerStatus)
  }


  return (
    <>
      <Clock 
        minutes={minutes} seconds={seconds} 
        handleStartTimer={handleStartTimer}
        handleStopTimer={handleStopTimer}
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