import { useState } from "react"

const NewPassword = () => {

    const [password, setPassword] = useState("")
    const [pwd, setPwd] = useState("")
  
    return (
        <div className='main-body'>
            <div className='access-container'>
            <h2 className='access-container-title'>Nueva Contraseña</h2>
                <form>
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
                </form>
            </div>
        </div>
    )
}

export default NewPassword