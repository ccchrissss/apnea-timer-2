const Inputs = ({ onSetTimerFromInputs }) => {

  return (
    <>
      <div className="break"></div>
      <form className="inputs">
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


// export default Inputs