import React, { Component } from "react"
import "./Animal.css"


export default class AnimalDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}

        return (
            <section className="animal">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h1 className="emoji">{animal.type}</h1>
                        <h4 className="card-title">
                            {animal.name}
                        </h4>
                        <div>
                            Owned By: {
                                this.props.relationships.filter(a => a.animalId === animal.id)
                                    .map(ownership => this.props.owners
                                    .find(owner => owner.id === ownership.ownerId).name).join(", ")
                            }
                        </div>
                        <a href="#"
                            onClick={() => this.props.deleteAnimal(animal.id)
                                .then(() => this.props.history.push("/animals"))}
                                className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}