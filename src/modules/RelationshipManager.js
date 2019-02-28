const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/relationships/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/relationships`).then(e => e.json())
  }
}