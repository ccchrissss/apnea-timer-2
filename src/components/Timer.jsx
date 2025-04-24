import Clock from './Clock'
import InputsAndPresets from './InputsAndPresets'
import { useState, useRef, useEffect } from 'react'


function Timer() {

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))
  // const [time, setTime] = useState(0)
  const [lastMinutes, setLastMinutes] = useState(0)
  const [lastSeconds, setLastSeconds] = useState((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))

  // const [timerId, setTimerId] = useState(null)
  let time = minutes * 60 + +seconds
  const intervalRef = useRef(0)
  // let timerId;
  let timerStatus = 'off'

  // const convertTimeToSeconds = () => {
    
  //   // setTime(minutes * 60 + +seconds)
  //   const time = minutes * 60 + +seconds
  //   console.log('time: ', time)

  //   // seconds must be converted to a string to read its length property.
  //   // countdownEl.innerHTML = `${minutes}:${seconds.toString().length > 1 ? seconds : `0${seconds}`}`;
  // }



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
    console.log('start timer')

    // updateCountdown()

    if (timerStatus === 'on') {
        timerStatus = 'on'
    } else if (timerStatus === 'off') {
        // stopTimer()

        console.log('startTimerBtn clicked, startTimer function executed')
        // timerId = setInterval(updateCountdown, 1000)
        const intervalId = setInterval(updateCountdown, 1000)
        console.log('intervalId: ', intervalId)

        intervalRef.current = intervalId
        // setTimerId(interval)

        
        // if (time > 0) {
        //     doubleBeep.play()
        // }
        
        // console.log('timerId', timerId)

        timerStatus = 'on'

    }

    console.log(timerStatus)

  }

  const updateCountdown = () => {

    // let time = minutes * 60 + +seconds
    const intervalId = intervalRef.current

    console.log('updateCountdown')
    // console.log('time before: ', time)


    if (time > 0) {

        time--
        console.log(time);

        // console.log('timerId: ', timerId)
        console.log('intervalId: ', intervalId)
        console.log('counting')
        // console.log('time after: ', time)
        let mins = Math.floor(time / 60);
        let secs = time % 60;
        // console.log(`minutes: ${minutes}  |  seconds: ${seconds}`)

        // add a zero to seconds when it is less than 10
        // if (seconds < 10) {
        //     seconds = `0${seconds}`
        // };
        // console.log(`${minutes}:${seconds}`)

        // countdownEl.innerHTML = `${minutes}:${seconds}`;

        setMinutes(mins)
        setSeconds((secs).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))

    } else {

        console.log(time)

        console.log(timerStatus)
        // console.log('timerId: ', timerId)
        // setTimerId(clearInterval(timerId))

        if (intervalId) {
            console.log('timer has ended. clearing interval', intervalId)

            // setTimerId(null)
            // clearInterval(timerId)

            clearInterval(intervalId);
            // handleStopTimer()


            // console.log(timerStatus)
            // console.log('timerId: ', timerId)

            // clearTimer()
        }

    };

    
  }

  const handleStopTimer = () => {
    // timerStatus = 'off'
    const intervalId = intervalRef.current
    console.log('intervalId: ', intervalId)
    
    clearInterval(intervalId);
    // release our intervalID from the variable
    // timerId = null;
    // setTimerId(null)

    console.log(timerStatus)
    // console.log('timerId: ', timerId)
  }

  // console.log('timerId', timerId)

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