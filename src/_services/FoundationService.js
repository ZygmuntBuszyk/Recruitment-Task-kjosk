import Api from '@/services/Api'

export default {
    test() {
        return Api
    },
    test1() {
        console.log('Api');
        console.log(Api);
    }
}


// import Api from '@/services/Api'

// export default {
//     register(credencials) {
//         return Api().post('register', credencials)
//     },
//     login(credencials) {
//         return Api().post('login', credencials)
//     }
// 