const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/employees`).then(e => e.json())
    },
    delete(id) {
        return fetch(`${remoteURL}/employees/${id}`, {
            "method": "DELETE"
        }).then(() => fetch(`${remoteURL}/employees`)
                .then(r => r.json()))
    }
}