import { StyledWorkoutType } from './styles/WorkoutType.styled'


const WorkoutType = ({ handleCustomTimerClick, handlePresetTableClick, selection }) => {


  return (

    <StyledWorkoutType selection={selection}>
        <ul>
          <li selection={selection} onClick={handleCustomTimerClick}>
            <p>Custom Timer</p>
          </li>
          <li selection={selection} onClick={handlePresetTableClick}>
            <p>Preset Table</p>
          </li>
        </ul>
    </StyledWorkoutType>
    
  )
}


export default WorkoutType