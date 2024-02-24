import axios from "axios"

const BASE_URL_DEV = 'http://127.0.0.1:8000/'
const BASE_URL_PROD = 'https://share-api-ic9f.vercel.app/'
const LOGIN = 'auth/jwt/create/'
const REFRESH = 'auth/jwt/refresh/'
const SIGNUP = 'auth/users/'
const NEW_PASSWORD = 'auth/users/reset_password_confirm/'
const RESET_PASSWORD = 'auth/users/reset_password/'
const ACTIVATE = 'auth/users/activation/'
const CUSTOMER = 'api/customers/'
const SERVICES = 'api/services/'
const BASE_SCREENS = '/api/screens/'
const SCREEN = '/api/screens/?available=true&service='
const FEATURES = '/api/features/'
const ORDERS = '/api/orders/'
const PAYMENT_CONFIRM = 'payment_confirmation/'

const baseAxios = axios.create({
    baseURL: BASE_URL_PROD
})

export const login = async data => baseAxios.post(LOGIN, data)

export const signup = async data => baseAxios.post(SIGNUP, data)

export const createCustomer = async data => baseAxios.post(CUSTOMER, data)

export const refresh = async data => baseAxios.post(REFRESH, data)

export const getCustomer = async data => baseAxios.get(`${CUSTOMER}me/` ,{
    headers: { Authorization: `JWT ${data.access}` }
})

export const activateEmail = async data => baseAxios.post(ACTIVATE, data)
.then(res => console.log(res))
.catch(err => console.log(err))

export const resetPassword = async data => baseAxios.post(RESET_PASSWORD, data)

export const newPassword = async data => baseAxios.post(NEW_PASSWORD, data)

export const getServices = async data => baseAxios.get(SERVICES)
    
export const screen = async data => baseAxios.get(`${SCREEN}${data.id}`)

export const updateScreen = async data => baseAxios.patch(`${BASE_SCREENS}${data.id}/`, data.updates)

export const customerScreen = async data => baseAxios.get(`${BASE_SCREENS}?customer=${data.id}`, {
    headers: { Authorization: `JWT ${data.access}`}
})

export const features = async data => baseAxios.get(FEATURES)

export const getOrders = async data => baseAxios.get(ORDERS, {
    headers: { Authorization: `JWT ${data.access}`}
})

export const createOrder = async data => baseAxios.post(`${ORDERS}`, data.order, {
    headers: { Authorization: `JWT ${data.access}`}
})

export const createOrderReceipt = async data => baseAxios.post(`${ORDERS}${data.orderId}/receipts/`, data.image, {
    headers: { Authorization: `JWT ${data.access}`}
})

export const deleteOrder = async data => baseAxios.delete(`${ORDERS}${data.orderId}` ,{
    headers: { Authorization: `JWT ${data.access}`}
})

export const confirmOrder = async data => baseAxios.get(`${PAYMENT_CONFIRM}${data.email}`)

// export const confirmOrder = async data => baseAxios.get(`https://share-api-ic9f.vercel.app/payment_confirmation/${data.email}`)

export const updateOrder = async data => baseAxios.patch(`${ORDERS}${data.orderId}/`, data.updates, {
    headers: { Authorization: `JWT ${data.access}`}
})
           