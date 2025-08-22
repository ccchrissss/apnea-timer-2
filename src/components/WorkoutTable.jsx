import { useState } from 'react'
import { StyledWorkoutTable } from './styles/WorkoutTable.styled'
import { Inputs } from './InputsAndPresets'

const WorkoutTable = ({ selectedTab }) => {

  const [selectedExercise, setSelectedExercise] = useState('')
  const [workoutSet1, setWorkoutSet1] = useState({
    breathe: { minutes: 0, seconds: 0},
    hold: { minutes: 0, seconds: 0},
    actual: { minutes: 0, seconds: 0},
  })

  return (
    <StyledWorkoutTable style={{ display: selectedTab == 'preset table' ? 'flex' : 'none'}}>
      <div className="exercise-choice">
        <fieldset>
          <legend>Choose your exercise</legend>
          <div>
            <input type="radio" id="co2" value="CO2" name="table-type" onClick={() => setSelectedExercise('co2')} />
            <label for="co2">CO2 Table</label>
          </div>
          <div>
            <input type="radio" id="o2" value="O2" name="table-type" onClick={() => setSelectedExercise('o2')} />
            <label for="o2">O2 Table</label>
          </div>
        </fieldset>
        <div className="break"></div>
        <p id="exercise-explanation">
          {selectedExercise == 'co2' ? (<span>{'Breathe Up: constant'}<br />{'Hold: increases'}</span>) : selectedExercise == 'o2' ? (<span>{'Breathe Up: decreases'}<br />{'Hold: constant'}</span>) : ''}
        </p>
      </div>
      
      <Inputs onSetTimerFromInputs={ e => {
          e.preventDefault();
          // console.log(e)
          const eMins = +e.target.form[0].value
          const eSecs = +e.target.form[1].value

          setWorkoutSet1({
            breathe: { minutes: eMins, seconds: eSecs},
            hold: { minutes: 0, seconds: '00'},
            actual: { minutes: 0, seconds: '00'},
          })
        }} />

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
            <td>{workoutSet1.breathe.minutes}:{workoutSet1.breathe.seconds}</td>
            <td>{workoutSet1.hold.minutes}:{workoutSet1.hold.seconds}</td>
            <td>{workoutSet1.actual.minutes}:{workoutSet1.actual.seconds}</td>
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