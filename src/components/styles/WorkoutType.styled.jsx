import styled from 'styled-components'

export const StyledWorkoutType = styled.section`

  margin: 1rem;

  ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0.25rem;
    border: solid 2px gray;
    border-radius: 10px;
  }

  li {
    padding: 0.5rem;
    border: solid 2px gray;
    border-radius: 10px;
  }
  li:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
  ul > li:nth-child(1) {
    background-color: ${props => props.selection == 'custom timer' ? 'lightgreen' : 'lightgrey'};
    border: ${props => props.selection == 'custom timer' ? 'solid 3px grey' : 'sold 2px gray'}
  }
  ul > li:nth-child(2) {
    background-color: ${props => props.selection == 'preset table' ? 'lightgreen' : 'lightgrey'};
    border: ${props => props.selection == 'preset table' ? 'solid 3px grey' : 'sold 2px gray'};
  }

`
