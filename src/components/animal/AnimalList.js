import React, { Component } from 'react'
import Animal from './Animal'

class AnimalList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </div>
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
            </React.Fragment>
        )
    }
}


export default AnimalList