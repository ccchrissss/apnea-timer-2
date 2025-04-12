import styled from 'styled-components'

export const StyledInputsAndPresets = styled.section`

  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;

  .inputs {
      font-size: 50px;
      display: flex;
      flex-basis: 50%;
      /* flex-wrap: wrap; */
      row-gap: 10px;
      column-gap: 0.5rem;
  }
  .inputs > * {
    height: 2.5rem;
    max-width: 5rem;
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
    min-height: 2rem;
    min-width:
  }


`