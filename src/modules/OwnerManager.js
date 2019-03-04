import APIManager from "./APIManager"
import Settings from './Settings'

export default Object.create(APIManager, {
    addOwner: {
        value: function (newOwner) {
            return fetch(`${Settings.remoteURL}/owners`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOwner)
            }).then(data => data.json())
      }
    }
})