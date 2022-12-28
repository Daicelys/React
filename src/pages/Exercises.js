import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import exercise from '../images/exercise.png'
import AddButton from '../components/AddButton'


class Exercises extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[{
                "id": 1,
                "title": "Ejercicio 1",
                "description":" Esta es una breve descripcion",
                "img": "",
                "leftcolor":"#A74CF2",
                "rigth":"#617BFB"
            }, {
                "id": 2,
                "title": "Ejercicio 2",
                "description":" Esta es una breve descripcion",
                "img": "",
                "leftcolor":"#17EAD9",
                "rigth":"#6078EA"

            },{
                "id": 3,
                "title": "Ejercicio 3",
                "description":" Esta es una breve descripcion",
                "img": "",
                "leftcolor":"#A74CF2",
                "rigth":"#617BFB"
            }]
        }
    }
    
    render(){
        return(
            <div>
            <Welcome
              username = "Raul"
            />
            <ExerciseList
            exercise = {this.state.data}
            />

            <AddButton/>

        </div>
        )
    }
}
export default Exercises