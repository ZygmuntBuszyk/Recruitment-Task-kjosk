import Api from './Api'

// dodawanie/edycja/podgląd/lista/usuwanie
export default {
    getService(name) {
        return Api().get(`${name}`)
    },

    getFoundation(name,id) {
        return Api().get(`${name}/${id}`)
    },

    createFoundation(name,data) {
        return Api().post(`${name}`, data)
    },

    updateFoundation(name, data) {
        return Api().put(`${name}`, data)
    },

    deleteFoundation(name, id) {
        return Api().delete(`${name}/${id}`)
    },
}