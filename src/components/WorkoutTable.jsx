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
            <th>set 1.b</th>
            <th>set 1.h</th>
            <th>set 1.a</th>
          </tr>
          <tr>
            <th scope="row">2</th>
            <th>set 2.b</th>
            <th>set 2.h</th>
            <th>set 2.a</th>
          </tr>
          <tr>
            <th scope="row">3</th>
            <th>set 3.b</th>
            <th>set 3.h</th>
            <th>set 3.a</th>
          </tr>
        </tbody>
      </table>
    </StyledWorkoutTable>
  )
}


export default WorkoutTable