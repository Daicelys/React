import React from 'react'
import { BrowserRouter, Routes, Route , Switch} from "react-router-dom";
import Exercises from '../pages/Exercises.js'
import ExercisesNew from '../pages/ExerciseNew'


function App (){
return(
    <BrowserRouter>
        <Route>
        <Route exact path="/exercise" element= {<Exercises/>}/>
        <Route exact path="/exercise/new" element= {<ExercisesNew/>}/>
        </Route>
   </BrowserRouter> 

 )
}
export default App

