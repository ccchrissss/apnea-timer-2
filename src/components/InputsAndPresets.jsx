

const Inputs = () => {

  return (
    <div class="inputs">
      <input id="minutes-input" type="text" placeholder="Minutes" />
      <button id="set-minutes">Set</button>
      <input id="seconds-input" type="text" placeholder="Seconds" />
      <button id="set-seconds">Set</button>
    </div>
  )
}

const PresetTimes = () => {

  return (
    <div class="preset-btns-big-box">
        <div class="preset-btns-sml-box">
            <button id="set-10-min-10-sec">10 min 10 sec</button>
            <button id="set-1-min">1 min</button>
            <button id="set-20-sec">20 sec</button>
        </div>
    </div>
  )
}

const InputsAndPresets = () => {

  return (
    <section id="inputs-and-preset-btns">
      <Inputs />
      <PresetTimes />
    </section>
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