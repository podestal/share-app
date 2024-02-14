import { useState } from "react"

const NewPassword = () => {

    const [password, setPassword] = useState("")
    const [pwd, setPwd] = useState("")
    const [err, setErr] = useState("")
    const regExp = /^(?=.*[0-9])(?=.*[a-z])/

    const handleSubmit = e => {
        e.preventDefault()
        setErr("")
        if (password !== pwd) {
            setErr("Passwords must match")
        }
        else if (!regExp.test(password)) {
            setErr("Passwords must be alphanumerical")
        }
        else if (password.length < 8) {
            setErr("Password must be at least 8 characters long")
        } 
        else {
            createUserMutation({ email, username, password, first_name: firstName, last_name: lastName })
            navigate('/login')
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