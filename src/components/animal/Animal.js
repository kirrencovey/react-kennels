import React, { Component } from 'react'
import './Animal.css'

class Animal extends Component {
    render() {
        return (
            <section>
                <div className="animalName">
                    {this.props.animal.name} {this.props.animal.type}<br />
                    <button onClick={() => {
                        this.props.sendHomeAnimal(this.props.animal.id)
                    }}>Send Home</button>
                </div>
                <div>
                    Owned By: { this.props.owners.join(", ") }
                </div>
            </section>
        )
    }
}

export default Animal