import React from 'react'
import Card from './Card'


function ExerciseList (props){
    return (
        <div>
              {props.exercise.map((exercise)=>{
                return(
                    <Card
                        title = {exercise.title}
                        description = {exercise.description}
                        leftcolor= {exercise.leftcolor}
                        rightcolot ={exercise.rightcolot}
                    />
                )
            })}
        </div>
    )
}
export default ExerciseList