import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList";
import "./Kennel.css"


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
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
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]

    relationshipsFromAPI = [
        { id: 1, animalId: 1, ownerId: 1 },
        { id: 2, animalId: 2, ownerId: 1 },
        { id: 3, animalId: 3, ownerId: 2 },
        { id: 4, animalId: 4, ownerId: 3 },
        { id: 5, animalId: 5, ownerId: 4 },
        { id: 6, animalId: 6, ownerId: 4 },
        { id: 7, animalId: 5, ownerId: 5 },
        { id: 8, animalId: 6, ownerId: 5 },
        { id: 9, animalId: 7, ownerId: 4 },
        { id: 10, animalId: 8, ownerId: 4 },
        { id: 11, animalId: 7, ownerId: 5 },
        { id: 12, animalId: 8, ownerId: 5 },
        { id: 13, animalId: 9, ownerId: 6 },
        { id: 14, animalId: 10, ownerId: 6 }
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
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals}
                    relationships={this.state.relationships}
                    owners={this.state.owners} />
            </article>
        )
    }
}

export default Kennel