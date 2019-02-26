import React, { Component } from 'react'


class LocationList extends Component {
    render() {
        return (
            <section className="locations">
                <h3>Student Kennels</h3>
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            <h3>{location.name}</h3>
                            <section>{location.address}</section>
                        </div>
                    )
                }
            </section>
        );
    }
}

export default LocationList