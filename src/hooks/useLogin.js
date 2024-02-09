import { useMutation } from "@tanstack/react-query"
import { login } from "../api/api"
import { useNavigate } from "react-router-dom"

const useLogin = (user, setUser, setError, setUsername, setPassword) => {

    const navigate = useNavigate()

    return useMutation({
        mutationFn: data => login(data),
        onSuccess: res => {
            const accessToken = res.data.access
            const refreshToken = res.data.refresh
            setUser({ ...user,  accessToken, refreshToken })
            setError('')
            setUsername('')
            setPassword('')
            localStorage.setItem('refresh', JSON.stringify(refreshToken))
            localStorage.setItem('access', JSON.stringify(accessToken))
            navigate('/home')
        },
        onError: err => setError(err.response.data.detail),
    })
}

export default useLogin