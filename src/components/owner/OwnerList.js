import React, { Component } from 'react'
import './Owner.css'
import { Link } from "react-router-dom"


class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="ownerButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/owners/new")}
                        }>
                    Add New Owner
                </button>
            </div>
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div className="owner" key={owner.id}>
                        {owner.name}<br />
                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/owners/${owner.id}/edit`);
                            }}>Edit
                        </button>
                        <button onClick={() => {
                            this.props.deleteOwner(owner.id)
                        }}>Delete</button>
                    </div>
                )
            }
            </section>
        </React.Fragment>
        )
    }
}


export default OwnerList