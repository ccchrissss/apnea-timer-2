import { StyledInputsAndPresets } from './styles/InputsAndPresets.styled'
import { useState } from 'react'

const Inputs = ({ minutes, seconds }) => {

  return (
    <>
      <p>{minutes} min {seconds} sec</p>

      <div class="break"></div>
      <div class="inputs">
        <input id="minutes-input" type="number" placeholder="Minutes" />
        {/* <button id="set-minutes">Set</button> */}
        {/* <div class="break"></div> */}
        <input id="seconds-input" type="number" placeholder="Seconds" />
        <button id="set-seconds">Set</button>
      </div>
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
      <div id="mini-clock">
        {/* <span id="mins">
          {minutes}:
        </span>
        <span id="secs">
          {seconds}
        </span> */}
      </div>
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

const InputsAndPresets = ({ handleOnSetTime123 }) => {

  const [presetSeconds, setPresetSeconds] = useState(0)
  const [presetMinutes, setPresetMinutes] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))


  // const handleOnSetPreset = (mins, secs) => {
  //   setMinutes(mins)
  //   setSeconds(
  //     secs.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
  //   )
  // }

  // idk why but I'm unable to get this function to fire when I pass it in as the handler like so: <PresetTimes onSetPreset={() => handleOnSetPreset} />
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



  return (
    <StyledInputsAndPresets>
      <Inputs minutes={minutes} seconds={seconds} />
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