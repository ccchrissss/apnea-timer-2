import styled from 'styled-components'

export const StyledWorkoutType = styled.section`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* margin: 1.5rem; */

  nav {
    display: flex;
    /* width: 100%; */
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;
    /* margin: 1.5rem; */
    justify-content: center;
    list-style-type: none;
    width: 22rem;
    padding: 0.25rem;
    border: solid 2px gray;
    border-radius: 10px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 0.5rem;
    border: solid 2px gray;
    border-radius: 10px;
    font-size: 1rem;
    flex: 40%;
    /* min-height: 3rem; */
  }
  ul > li:nth-child(1) {
    background-color: ${props => props.selection == 'custom timer' ? 'lightgreen' : 'lightgrey'};
    border: ${props => props.selection == 'custom timer' ? 'solid 3px grey' : 'sold 2px gray'}
  }
  ul > li:nth-child(2) {
    background-color: ${props => props.selection == 'preset table' ? 'lightgreen' : 'lightgrey'};
    border: ${props => props.selection == 'preset table' ? 'solid 3px grey' : 'sold 2px gray'};
  }
  ul > li:hover {
    background-color: #bababa;
    cursor: pointer;
  }
  p {
    line-height: 1;
    margin: 0px;
  }

`
