import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from '../modules/AnimalManager'
import EmployeeManager from '../modules/EmployeeManager'
import LocationManager from '../modules/LocationManager'
import OwnerManager from '../modules/OwnerManager'
import RelationshipManager from '../modules/RelationshipManager'
import AnimalDetail from './animal/AnimalDetail'
import OwnerDetail from './owner/OwnerDetail'
import EmployeeDetail from './employee/EmployeeDetail';



export default class ApplicationViews extends Component {

    state = {
        owners: [],
        employees: [],
        locations: [],
        animals: [],
        relationships: []
    }

    fireEmployee = (id) => {
        EmployeeManager.delete(id, "employees")
            .then(employees => this.setState({ employees: employees }))
    }

    sendHomeAnimal = (id) => {
        AnimalManager.delete(id, "animals")
            .then(animals => this.setState({ animals: animals }))
    }

    deleteOwner = (id) => {
        OwnerManager.delete(id, "owners")
            .then(owners => this.setState({ owners: owners }))
            .then(() => RelationshipManager.getAll("relationships"))
            .then(relationships => this.setState({ relationships: relationships }))
    }

    componentDidMount() {
        const newState = {}

        AnimalManager.getAll("animals")
            .then(animals => newState.animals = animals)
            .then(() => EmployeeManager.getAll("employees"))
            .then(employees => newState.employees = employees)
            .then(() => OwnerManager.getAll("owners"))
            .then(owners => newState.owners = owners)
            .then(() => LocationManager.getAll("locations"))
            .then(locations => newState.locations = locations)
            .then(() => RelationshipManager.getAll("relationships"))
            .then(relationships => newState.relationships = relationships)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}
                        sendHomeAnimal={this.sendHomeAnimal} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} sendHomeAnimal={this.sendHomeAnimal}
                        animals={this.state.animals}
                        relationships={this.state.relationships}
                        owners={this.state.owners} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                        fireEmployee={this.fireEmployee} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} fireEmployee={this.fireEmployee}
                        employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners}
                        deleteOwner={this.deleteOwner} />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} deleteOwner={this.deleteOwner}
                        owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}