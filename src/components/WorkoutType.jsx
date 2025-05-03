import { StyledWorkoutType } from './styles/WorkoutType.styled'


const WorkoutType = ({ handleCustomTimerClick, handlePresetTableClick, selection }) => {


  return (

    <StyledWorkoutType selection={selection}>
      <nav>
        <ul>
          <li selection={selection} onClick={handleCustomTimerClick}>Custom Timer</li>
          <li selection={selection} onClick={handlePresetTableClick}>Preset Table</li>
        </ul>
      </nav>
    </StyledWorkoutType>
    
  )
}


export default WorkoutType