import axios from "axios"

const BASE_URL = 'http://127.0.0.1:8000/'
const LOGIN = 'auth/jwt/create/'
const SIGNUP = 'auth/users/'
const SERVICES = 'api/services/'

const baseAxios = axios.create({
    baseURL: BASE_URL
})

export const login = async data => baseAxios.post(LOGIN, data)

export const signup = async data => baseAxios.post(SIGNUP, data)

export const services = async data => baseAxios.get(SERVICES)
    
