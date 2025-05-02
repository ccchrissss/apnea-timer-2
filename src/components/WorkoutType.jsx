import { StyledWorkoutType } from './styles/WorkoutType.styled'


const WorkoutType = ({ handleCustomTimerClick, handlePresetTableClick }) => {


  return (

    <StyledWorkoutType>
      <nav>
        <ul>
          <li onClick={handleCustomTimerClick}>Custom Timer</li>
          <li onClick={handlePresetTableClick}>Preset Table</li>
        </ul>
      </nav>
    </StyledWorkoutType>
    
  )
}


export default WorkoutType