import { Route, Redirect } from "react-router-dom"
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
import EmployeeDetail from './employee/EmployeeDetail'
import AnimalForm from './animal/AnimalForm'
import OwnerForm from './owner/OwnerForm'
import EmployeeForm from './employee/EmployeeForm'
import Login from './authentication/Login'



export default class ApplicationViews extends Component {

    state = {
        owners: [],
        employees: [],
        locations: [],
        animals: [],
        relationships: []
    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    fireEmployee = (id) => {
        EmployeeManager.delete(id, "employees")
            .then(employees => this.setState({ employees: employees }))
    }

    addEmployee = employee =>
        EmployeeManager.addEmployee(employee)
            .then(() => AnimalManager.getAll("employees"))
            .then(employees =>
            this.setState({
                employees: employees
            })
    )

    sendHomeAnimal = (id) => {
        AnimalManager.delete(id, "animals")
            .then(animals => this.setState({ animals: animals }))
    }

    addAnimal = animal =>
        AnimalManager.addAnimal(animal)
            .then(() => AnimalManager.getAll("animals"))
            .then(animals =>
            this.setState({
                animals: animals
            })
    )

    deleteOwner = (id) => {
        OwnerManager.delete(id, "owners")
            .then(owners => this.setState({ owners: owners }))
            .then(() => RelationshipManager.getAll("relationships"))
            .then(relationships => this.setState({ relationships: relationships }))
    }

    addOwner = owner =>
        OwnerManager.addOwner(owner)
            .then(() => OwnerManager.getAll("owners"))
            .then(owners =>
            this.setState({
                owners: owners
            })
    )

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
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={props => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props}
                                    animals={this.state.animals}
                                    sendHomeAnimal={this.sendHomeAnimal} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props}
                                sendHomeAnimal={this.sendHomeAnimal}
                                animals={this.state.animals}
                                relationships={this.state.relationships}
                                owners={this.state.owners} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                                addAnimal={this.addAnimal}
                                employees={this.state.employees} />
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props}
                                    employees={this.state.employees}
                                    fireEmployee={this.fireEmployee} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} fireEmployee={this.fireEmployee}
                                employees={this.state.employees} />
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                                addEmployee={this.addEmployee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList {...props}
                                owners={this.state.owners}
                                deleteOwner={this.deleteOwner} />
                }} />
                <Route exact path="/owners" render={props => {
                    if (this.isAuthenticated()) {
                        return <OwnerList {...props}
                                    owners={this.state.owners}
                                    deleteOwner={this.deleteOwner} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props}
                                deleteOwner={this.deleteOwner}
                                owners={this.state.owners} />
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                                addOwner={this.addOwner} />
                }} />
            </React.Fragment>
        )
    }
}