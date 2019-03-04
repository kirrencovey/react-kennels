import React, { Component } from "react";
import "./Animal.css";

export default class AnimalForm extends Component {
  // Set initial state
  state = {
    animalName: "",
    type: "",
    employeeId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange)
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewAnimal = evt => {
    evt.preventDefault()
    if
    (this.state.employeeId === "") {
      window.alert("Please select a caretaker")
    }else {
      const animal = {
        name: this.state.animalName,
        type: this.state.type,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        employeeId: parseInt(this.state.employeeId)
      };

      // Create the animal and redirect user to animal list
      this.props
        .addAnimal(animal)
        .then(() => this.props.history.push("/animals"))
    }
  }

  render() {
    return (
      <React.Fragment>
        <form className="animalForm">
          <div className="form-group">
            <label htmlFor="animalName">Animal name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="animalName"
              placeholder="Animal name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="type"
              placeholder="Animal type (ctrl+cmd+space for emojis)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employee">Assign to caretaker</label>
            <select
              defaultValue=""
              name="employee"
              id="employeeId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select an employee</option>
              {this.props.employees.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={this.constructNewAnimal}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}