import { StyledInputsAndPresets } from './styles/InputsAndPresets.styled'
// import Inputs from './Inputs'

export const Inputs = ({ formName, onSetTimerFromInputs }) => {

  return (
    <>
      <div className="break"></div>
      <h4>{formName}</h4>
      <div className="break"></div>
      <form className="inputs">
        {/* <label>{inputsLabel}</label> */}
        {/* <label>Min</label> */}
        <input id="minutes-input" type="number" placeholder="1" min="0" max="10" step="1" />
        {/* <label>Sec</label> */}
        <input id="seconds-input" type="number" placeholder="15" min="0" max="59" step="15" />
        <button id="set-seconds" onClick={onSetTimerFromInputs}>Set</button>
      </form>
      {/* <div className="break"></div> */}
    </>
  )
}

const PresetTimes = ({ onSetPreset100, onSetPreset020, onSetPreset1010 }) => {

  return (
    <div className="preset-btns-big-box">
        <div className="preset-btns-sml-box">
            <button id="set-1-min" onClick={onSetPreset100}>1 min</button>
            <button id="set-20-sec" onClick={onSetPreset020}>20 sec</button>
            {/* <div className="break"></div> */}
            <button id="set-10-min-10-sec" onClick={onSetPreset1010}>10 min 10 sec</button>
        </div>
    </div>
  )
}

const InputsAndPresets = ({ state, handleOnSetPreset100, handleOnSetPreset020, handleOnSetPreset1010, handleOnSetTimerFromInputs }) => {

  return (
    <StyledInputsAndPresets style={{ display: state == 'custom timer' ? 'flex' : 'none'}}>
      <Inputs onSetTimerFromInputs={handleOnSetTimerFromInputs} />
      <PresetTimes 
        onSetPreset100={handleOnSetPreset100} 
        onSetPreset020={handleOnSetPreset020} 
        onSetPreset1010={handleOnSetPreset1010}
      />
    </StyledInputsAndPresets>
  )
}


export default InputsAndPresets;