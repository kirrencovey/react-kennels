import React, { Component } from 'react'
import './Animal.css'

class Animal extends Component {
    render() {
        return (
            <section className="animal">
                <div className="animalName">
                    { this.props.animal.name } { this.props.animal.type }
                </div>
                <div>Owned By: {
                    this.props.owners.join(", ")
                }
                </div>
            </section>
        )
    }
}

export default Animal