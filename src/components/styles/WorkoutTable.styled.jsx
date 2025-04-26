import styled from 'styled-components'

export const StyledWorkoutTable = styled.section`

  margin: 1rem;

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
