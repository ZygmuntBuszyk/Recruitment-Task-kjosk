import Api from './Api'

// dodawanie/edycja/podgląd/lista/usuwanie
export default {
    getService(name) {
        return Api().get(`${name}`)
    },

    getOneService(name,id) {
        return Api().get(`${name}/${id}`)
    },

    createService(name,data) {
        return Api().post(`${name}`, data)
    },

    updateService(name, data) {
        return Api().put(`${name}`, data)
    },

    deleteService(name, id) {
        return Api().delete(`${name}/${id}`)
    },
}