import APIManager from "./APIManager"
import Settings from './Settings'

export default Object.create(APIManager, {
    addEmployee: {
        value: function (newEmployee) {
            return fetch(`${Settings.remoteURL}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
            }).then(data => data.json())
      }
    }
})