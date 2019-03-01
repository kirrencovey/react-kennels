import Settings from './Settings'


export default Object.create(null, {
    get: {
        value: function (id, apiResource) {
            return fetch(`${Settings.remoteURL}/${apiResource}/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function (apiResource) {
            return fetch(`${Settings.remoteURL}/${apiResource}`).then(e => e.json())
        }
    },
    delete: {
        value: function (id, apiResource) {
            return fetch(`${Settings.remoteURL}/${apiResource}/${id}`, {
                "method": "DELETE"
            }).then(() => fetch(`${Settings.remoteURL}/${apiResource}`)
            .then(r => r.json()))
        }
    }
})