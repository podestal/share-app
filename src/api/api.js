import axios from "axios"

const BASE_URL = 'http://127.0.0.1:8000/'
const LOGIN = 'auth/jwt/create/'
const REFRESH = 'auth/jwt/refresh/'
const SIGNUP = 'auth/users/'
const CUSTOMER = 'api/customers/'
const SERVICES = 'api/services/'
const SCREEN = '/api/screens/?available=true&service='
const UPDATE_SCREEN = '/api/screens/'

const baseAxios = axios.create({
    baseURL: BASE_URL
})

export const login = async data => baseAxios.post(LOGIN, data)

export const signup = async data => baseAxios.post(SIGNUP, data)

export const refresh = async data => baseAxios.post(REFRESH, data)

export const getCustomer = async data => baseAxios.get(`${CUSTOMER}me/` ,{
    headers: { Authorization: `JWT ${data.access}` }
})

export const services = async data => baseAxios.get(SERVICES)
    
export const screen = async data => baseAxios.get(`${SCREEN}${data.id}`)

export const updateScreen = async data => baseAxios.put(`${UPDATE_SCREEN}${data.id}/`, data)