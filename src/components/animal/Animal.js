import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Animal.css'

export default class Animal extends Component {
    render() {
        return (
            <section className="animal">
                <div key={this.props.animal.id} className="card">
                    <div className="card-body">
                        <h1 className="emoji">{this.props.animal.type}</h1>
                        <h4 className="card-title">
                            {this.props.animal.name}
                        </h4>
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                        <button
                            onClick={() => this.props.sendHomeAnimal(this.props.animal.id)
                                .then(() => this.props.history.push("/animals"))}
                                className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}