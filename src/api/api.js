import axios from "axios"

const BASE_URL = 'http://127.0.0.1:8000/'
const LOGIN = 'auth/jwt/create/'

const baseAxios = axios.create({
    baseURL: BASE_URL
})

export const login = async (data) => baseAxios.post(LOGIN, data)
    
