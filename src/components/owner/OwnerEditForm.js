import React, { Component } from "react"
import OwnerManager from "../../modules/OwnerManager"

export default class OwnerEditForm extends Component {
    // Set initial state
    state = {
      ownerName: "",
      phone: "",
      address: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
      evt.preventDefault()

        const editedOwner = {
          id: this.props.match.params.ownerId,
          name: this.state.ownerName,
          phone: this.state.phone,
          address: this.state.address
        }

    this.props.updateOwner(editedOwner)
    .then(() => this.props.history.push("/owners"))
    }

    componentDidMount() {
      OwnerManager.get(this.props.match.params.ownerId, "owners")
      .then(owner => {
        this.setState({
          ownerName: owner.name,
          phone: owner.phone,
          address: owner.address
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="ownerEditForm">
            <div className="form-group">
              <label htmlFor="ownerName">Owner name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="ownerName"
                value = {this.state.ownerName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="phone"
                value = {this.state.phone}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="address"
                value = {this.state.address}
              />
            </div>
            <button
              type="submit"
              onClick={this.updateExistingOwner}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}