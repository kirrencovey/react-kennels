import React, { Component } from 'react'
import './Employee.css'
import { Link } from "react-router-dom"


class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="employeeButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")}
                        }>
                    Add New Employee
                </button>
            </div>
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div className="employee" key={employee.id}>
                        {employee.name}<br />
                        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                        <button onClick={() => {
                            this.props.fireEmployee(employee.id)
                        }} >Fire!</button>
                    </div>
                )
            }
            </section>
        </React.Fragment>
        )
    }
}


export default EmployeeList