import styled from 'styled-components'

export const StyledInputsAndPresets = styled.section`

  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  justify-content: center;
  margin: 1rem;

  h4 {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .inputs {
      display: flex;
      flex-basis: 50%;
      /* flex-wrap: wrap; */
      row-gap: 10px;
      column-gap: 0.5rem;
  }
  .inputs > * {
    font-size: 1rem;
    height: 2.5rem;
    max-width: 5rem;
  }
  #minutes-input {
    border: solid 2px gray;
    border-radius: 5px;
  }
  #seconds-input {
    border: solid 2px gray;
    border-radius: 5px;
  }
  
  button {
    font-size: 1rem;
    border: solid gray;
    border-radius: 10px;
    min-width: 4.5rem;
  }

  .preset-btns-big-box {
      display: flex;
  }

  .preset-btns-sml-box {
      display: flex;
      column-gap: 5px;
  }
  .preset-btns-sml-box {
    display: flex;
    column-gap: 0.5rem;
    min-height: 2.5rem;
    /* min-width: */
  }


`