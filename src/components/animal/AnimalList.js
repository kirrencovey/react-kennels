import React, { Component } from 'react'
import Animal from './Animal'


class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        <Animal animal={animal}
                            owners={
                                this.props.relationships.filter(a => a.animalId === animal.id)
                                    .map(ownership => this.props.owners
                                    .find(owner => owner.id === ownership.ownerId).name)
                                } />
                    </div>
                )
            }
            </section>
        )
    }
}


export default AnimalList