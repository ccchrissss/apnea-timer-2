import { useState } from 'react'
import { StyledWorkoutTable } from './styles/WorkoutTable.styled'

const WorkoutTable = () => {


  return (
    <StyledWorkoutTable>
      <table>
        <thead>
          <tr className="categories">
            <th scope="col">Set #</th>
            <th scope="col">Breathe</th>
            <th scope="col">Hold</th>
            <th scope="col">Actual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>set 1.b</td>
            <td>set 1.h</td>
            <td>set 1.a</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>set 2.b</td>
            <td>set 2.h</td>
            <td>set 2.a</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>set 3.b</td>
            <td>set 3.h</td>
            <td>set 3.a</td>
          </tr>
        </tbody>
      </table>
    </StyledWorkoutTable>
  )
}


export default WorkoutTable