import React, { Component } from "react"


export default class EmployeeDetail extends Component {
    render() {
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section>
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {employee.name}
                        </h4>
                        <div>{employee.phone}</div>
                        <a href="#"
                            onClick={() => this.props.firEmployee(employee.id)
                                .then(() => this.props.history.push("/employees"))}
                                className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}