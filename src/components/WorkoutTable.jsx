import { useState } from 'react'
import { StyledWorkoutTable } from './styles/WorkoutTable.styled'

const WorkoutTable = () => {


  return (
    <StyledWorkoutTable>
      <table>
        <thead>
          <tr className="categories">
            <th>Breathe</th>
            <th>Hold</th>
            <th>Actual</th>
          </tr>
          <tr>
            <th>set 1.breathe</th>
            <th>set 1.hold</th>
            <th>set 1.holdActual</th>
          </tr>
          <tr>
            <th>set 2.breathe</th>
            <th>set 2.hold</th>
            <th>set 2.holdActual</th>
          </tr>
        </thead>
      </table>
    </StyledWorkoutTable>
  )
}


export default WorkoutTable