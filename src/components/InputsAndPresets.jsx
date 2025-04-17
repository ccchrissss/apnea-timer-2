import { StyledInputsAndPresets } from './styles/InputsAndPresets.styled'
import { useRef } from 'react'

const Inputs = ({ onSetTimerFromInputs }) => {


  // const inputRefMinutes = useRef()
  // const inputRefSeconds = useRef()

  return (
    <>
      <div class="break"></div>
      <form class="inputs">
        <input id="minutes-input" type="number" placeholder="Minutes" />
        {/* ref={inputRefMinutes} /> */}
        {/* <button id="set-minutes">Set</button> */}
        {/* <div class="break"></div> */}
        <input id="seconds-input" type="number" placeholder="Seconds" />
        {/* ref={inputRefSeconds} /> */}
        <button id="set-seconds" onClick={onSetTimerFromInputs}>Set</button>
          {/* // (e) => {
          // e.preventDefault()
          // console.log('target value', e.target.value)
          // setMinutes(e.target.value)
          // console.log('mins', inputRefMinutes.current.value)
          // console.log('secs', inputRefSeconds.current.value)}}>Set</button> */}
        {/* <button onClick></button> */}
      </form>
      {/* <div class="break"></div> */}
    </>
  )
}

const PresetTimes = ({ onSetPreset100, onSetPreset020, onSetPreset1010, onSetTime123 }) => {

  // const [minutes, setMinutes] = useState(0)
  // const [seconds, setSeconds] = useState((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))

  // const handleClick = (mins, secs) => {
  //   setMinutes(mins)
  //   setSeconds(
  //     secs.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
  //   )
  // }

  

  return (
    <div class="preset-btns-big-box">
        <div class="preset-btns-sml-box">
            <button id="set-1-min" onClick={onSetPreset100}>1 min</button>
            <button id="set-20-sec" onClick={onSetPreset020}>20 sec</button>
            {/* <div class="break"></div> */}
            <button id="set-10-min-10-sec" onClick={onSetPreset1010}>10 min 10 sec</button>
            {/* <button id="set-10-min-10-sec" onClick={() => handleClick(10, 10)}>10 min 10 sec</button> */}
        </div>
        <div class="break"></div>
        <div>
          <button onClick={onSetTime123}>set time 1:23</button>
        </div>
    </div>
  )
}

const InputsAndPresets = ({ handleOnSetPreset100, handleOnSetPreset020, handleOnSetPreset1010, handleOnSetTime123, handleOnSetTimerFromInputs }) => {

  // handleOnSetTimerFromInputs 


  // const [presetSeconds, setPresetSeconds] = useState(0)
  // const [presetMinutes, setPresetMinutes] = useState(0)
  // const [minutes, setMinutes] = useState(0)
  // const [seconds, setSeconds] = useState((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))


  // const handleOnSetPreset = (mins, secs) => {
  //   setMinutes(mins)
  //   setSeconds(
  //     secs.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
  //   )
  // }



  return (
    <StyledInputsAndPresets>
      <Inputs onSetTimerFromInputs={handleOnSetTimerFromInputs} />
      <PresetTimes 
        onSetPreset100={handleOnSetPreset100} 
        onSetPreset020={handleOnSetPreset020} 
        onSetPreset1010={handleOnSetPreset1010}
        onSetTime123={handleOnSetTime123}
      />
    </StyledInputsAndPresets>
  )
}


export default InputsAndPresets;


// {/* <section id="inputs-and-preset-btns">
// {/* <div class="inputs">
//     <input id="minutes-input" type="text" placeholder="Minutes">
//     <button id="set-minutes">Set</button>
//     <input id="seconds-input" type="text" placeholder="Seconds">
//     <button id="set-seconds">Set</button>
// </div> */}
// {/* <div class="preset-btns-big-box">
//     <div class="preset-btns-sml-box">
//         <button id="set-10-min-10-sec">10 min 10 sec</button>
//         <button id="set-1-min">1 min</button>
//         <button id="set-20-sec">20 sec</button>
//     </div>
// </div> */}
// </section> */}