import axios,{AxiosInstance} from 'axios'

export class Interceptors {
    instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:3000/admin/api',
            timeout: 5000
        })
    }

    init() {
        this.instance.interceptors.request.use(
            config =>{
                return config
            },
            err =>{
                return Promise.reject(err)
            }
        )

        this.instance.interceptors.response.use(
            response =>{
                return response.data;
            },
            err => {
                return Promise.reject(err)
            }
        )
    }
    getInterceptors() {
        return this.instance
    }
}



