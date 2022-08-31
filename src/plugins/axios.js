import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-75acf-default-rtdb.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'


Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-75acf-default-rtdb.firebaseio.com/',
            headers: {
                "Autorizathion": "abc123"
            }
        })
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            // if (config.method == 'post') {
            //     config.method = 'put'
            // }
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(response => {
            // const array = []
            // for (let chave in response.data) {
            //     array.push({ id: chave, ...response.data[chave] })
            // }

            // response.data = array
            return response
        }, error => Promise.reject(error))
    }
})