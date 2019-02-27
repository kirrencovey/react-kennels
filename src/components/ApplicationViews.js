import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


class ApplicationViews extends Component {

    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Odin" },
        { id: 2, name: "Thor" },
        { id: 3, name: "Simon" },
        { id: 4, name: "Jorah" },
        { id: 5, name: "Calamy" },
        { id: 6, name: "Broderick" },
        { id: 7, name: "Sawyer" },
        { id: 8, name: "Finn" },
        { id: 9, name: "Henry" },
        { id: 10, name: "Martin" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay", phone: "212-0987" },
        { id: 2, name: "Emma Beaton", phone: "472-8367" },
        { id: 4, name: "Adam Oswalt", phone: "878-2673" },
        { id: 5, name: "Fletcher Bangs", phone: "465-1047" },
    ]

    relationshipsFromAPI = [
        { id: 1, animalId: 1, ownerId: 1 },
        { id: 2, animalId: 2, ownerId: 1 },
        { id: 3, animalId: 3, ownerId: 2 },
        { id: 4, animalId: 4, ownerId: 1 },
        { id: 5, animalId: 5, ownerId: 4 },
        { id: 6, animalId: 6, ownerId: 4 },
        { id: 7, animalId: 5, ownerId: 5 },
        { id: 8, animalId: 6, ownerId: 5 },
        { id: 9, animalId: 7, ownerId: 4 },
        { id: 10, animalId: 8, ownerId: 4 },
        { id: 11, animalId: 7, ownerId: 5 },
        { id: 12, animalId: 8, ownerId: 5 },
        { id: 13, animalId: 9, ownerId: 2 },
        { id: 14, animalId: 10, ownerId: 2 }
    ]

    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        relationships: this.relationshipsFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}
                                relationships={this.state.relationships}
                                owners={this.state.owners} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews