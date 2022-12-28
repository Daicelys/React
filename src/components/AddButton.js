import React from 'react'
import buttomImg from '../images/add.png'
import '../style/AddButton.css'
import {Link} from 'react-router-dom'

const AddButton = () => (
    <Link to="/exercise/new">
        <img src={buttomImg} className="Fitness-Add" alt="exercise"/>
    </Link>
)

export default AddButton