import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { newPassword } from "../api/api"
import { useParams, useNavigate } from "react-router-dom"

const NewPassword = () => {

    const [password, setPassword] = useState("")
    const [pwd, setPwd] = useState("")
    const [err, setErr] = useState("")
    const regExp = /^(?=.*[0-9])(?=.*[a-z])/
    const params = useParams()
    const navigate = useNavigate()

    const {mutate: newPasswordMutation} = useMutation({
        mutationFn: data => newPassword(data),
        onSuccess: res => {
            navigate('/login')},
    })

    const handleSubmit = e => {
        e.preventDefault()
        setErr("")
        if (password !== pwd) {
            setErr("Las contraseñas deben coincidir")
        }
        else if (!regExp.test(password)) {
            setErr("Contraseña debe de ser alfanumérica")
        }
        else if (password.length < 8) {
            setErr("Contraseña debe de tener al menos 8 caracteres")
        } 
        else {
            newPasswordMutation({ uid:params.uid, token:params.token, new_password: password, re_new_password: pwd })
        }
    }
  
    return (
        <div className='main-body'>
            <div className='access-container'>
            {err && <p className='access-container-error'>{err}</p>}    
            <h2 className='access-container-title'>Nueva Contraseña</h2>
                <form onSubmit={handleSubmit}>
                <input 
                    type="password" 
                    placeholder='Contraseña'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder='Contraseña otra vez'
                    value={pwd}
                    onChange={e => setPwd(e.target.value)}
                />
                <button className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default NewPassword