import React, { Component } from 'react'
import './Owner.css'
import { Link } from "react-router-dom"


class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div className="owner" key={owner.id}>
                        {owner.name}<br />
                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                        <button onClick={() => {
                            this.props.deleteOwner(owner.id)
                        }}>Delete</button>
                    </div>
                )
            }
            </section>
        )
    }
}


export default OwnerList