import { useState } from 'react'
import { StyledWorkoutTable } from './styles/WorkoutTable.styled'
import { Inputs } from './InputsAndPresets'

const WorkoutTable = () => {


  return (
    <StyledWorkoutTable>
      <fieldset>
        <legend>Choose your exercise</legend>
        <div>
          <input type="radio" id="co2" value="CO2" name="table-type" />
          <label for="co2">CO2 Table</label>
        </div>
        <div>
          <input type="radio" id="o2" value="O2" name="table-type" />
          <label for="o2">O2 Table</label>
        </div>
      </fieldset>
      
      <Inputs formName={'tbd'} />

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