import styled from 'styled-components'

export const StyledWorkoutTable = styled.section`

  margin: 1rem;

  fieldset {
    border: none;
  }

  table {
    table-layout: fixed;
    width: 100%;
    /* for some reason border collapse prevents border radius from working */
    /* border-collapse: collapse; */
    border: solid 2px gray;
    border-radius: 5px;
  }

  thead {
    font-size: 1rem;
  }
  tbody {
    font-size: 1.15rem;
  }

  tbody > tr:nth-child(odd) {
    background-color: #D6EEEE;
  }

  thead > tr > th {
    padding: 0.5rem;
  }
  thead > tr > th:nth-child(2) {
    width: 28%;
  }

  tbody > tr > * {
    padding: 0.25rem;
  }


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

  /* .hidden {
    display: none;
  } */

`

// table {
//   table-layout: fixed;
//   width: 100%;
//   border-collapse: collapse;
//   border: 3px solid purple;
// }

// thead th:nth-child(1) {
//   width: 30%;
// }

// thead th:nth-child(2) {
//   width: 20%;
// }

// th,
// td {
//   padding: 20px;
// }
