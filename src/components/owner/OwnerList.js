import React, { Component } from 'react'
import './Owner.css'


class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div className="owner" key={owner.id}>
                        {owner.name}<br />
                        {owner.phone}<br />
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