import React from 'react'
import exerciseImg from '../images/exercise.png'
import circlesImg from '../images/circles.png'
import '../style/Card.css'
class Card extends React.Component {
    render (){
    return (
        <div className = "card mx-auto Fitness-Card" 
        style={{       
            background: 'url(${circlesImg}), linear-gradient(to right, ${this.props.leftcolor}, ${this.rightcolor})' 
         }}
            > 
            <div className= "card-body">
                <div className = "row center">
                    <div className = "col-6">
                        <img src={exerciseImg} className="float-right"/>
                    </div>
                    <div className= "col-6 Fitnes-Card-Info">
                            <h1>{this.props.title}</h1>
                            <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Card