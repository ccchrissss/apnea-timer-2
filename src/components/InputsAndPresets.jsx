import { StyledInputsAndPresets } from './styles/InputsAndPresets.styled'

const Inputs = () => {

  return (
    <>
      <div class="inputs">
        <input id="minutes-input" type="text" placeholder="Minutes" />
        {/* <button id="set-minutes">Set</button> */}
        {/* <div class="break"></div> */}
        <input id="seconds-input" type="text" placeholder="Seconds" />
        <button id="set-seconds">Set</button>
      </div>
      {/* <div class="break"></div> */}
    </>
  )
}

const PresetTimes = () => {

  return (
    <div class="preset-btns-big-box">
        <div class="preset-btns-sml-box">
            <button id="set-1-min">1 min</button>
            <button id="set-20-sec">20 sec</button>
            {/* <div class="break"></div> */}
            <button id="set-10-min-10-sec">10 min 10 sec</button>
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