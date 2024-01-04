import axios from "axios"
import { useMutation } from "@tanstack/react-query"

const BASE_URL = 'http://127.0.0.1:8000/'
const LOGIN = 'auth/jwt/create/'

const baseAxios = axios.create({
    baseURL: BASE_URL
})

export const useLogin = (data) => {

    const login = () => baseAxios.post(LOGIN, data)

    return useMutation({
        mutationFn: () => login(),
        onSuccess: res => console.log(res),
        onError: err => console.log(err),
    })
    
}