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
    },
    updateAnimal: {
        value: function (editedAnimal) {
        return fetch(`${Settings.remoteURL}/animals/${editedAnimal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedAnimal)
        }).then(data => data.json());
      }
    }
})