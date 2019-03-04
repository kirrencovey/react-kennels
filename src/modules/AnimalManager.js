import APIManager from "./APIManager"
import Settings from './Settings'

export default Object.create(APIManager, {
    addAnimal: {
        value: function (newAnimal) {
            return fetch(`${Settings.remoteURL}/animals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
            }).then(data => data.json())
      }
    }
})