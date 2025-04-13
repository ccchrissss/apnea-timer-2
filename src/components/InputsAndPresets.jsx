import { StyledInputsAndPresets } from './styles/InputsAndPresets.styled'
import { useState } from 'react'

const Inputs = () => {

  return (
    <>
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

const PresetTimes = () => {

  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState((0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}))

  const handleClick = (mins, secs) => {
    setMinutes(mins)
    setSeconds(
      secs.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
    )
  }

  

  return (
    <div class="preset-btns-big-box">
      <div id="mini-clock">
        <span id="mins">
          {minutes}:
        </span>
        <span id="secs">
          {seconds}
        </span>
      </div>
        <div class="preset-btns-sml-box">
            <button id="set-1-min" onClick={() => handleClick(1, 0)}>1 min</button>
            <button id="set-20-sec"  onClick={() => handleClick(0, 20)}>20 sec</button>
            {/* <div class="break"></div> */}
            <button id="set-10-min-10-sec" onClick={() => handleClick(10, 10)}>10 min 10 sec</button>
        </div>
    </div>
  )
}

const InputsAndPresets = () => {

  return (
    <StyledInputsAndPresets>
      <Inputs />
      <PresetTimes />
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