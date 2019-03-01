import React, { Component } from 'react'
import Animal from './Animal'

class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div className="animal" key={animal.id}>
                        <Animal animal={animal}
                            sendHomeAnimal={this.props.sendHomeAnimal}
                        />
                    </div>
                )
            }
            </section>
        )
    }
}


export default AnimalList