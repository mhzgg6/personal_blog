import axios from 'axios'

//  跨域默认不让操作cookie的
axios.interceptors.request.use((config) => {
    //  跨域携带cookie
    config.withCredentials = true
    return config
}, (error) => {
    return Promise.reject(error)
})