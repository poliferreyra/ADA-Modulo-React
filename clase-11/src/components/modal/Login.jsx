import React, { useState } from 'react'
import { Modal } from './Modal'

export const Login = () => {

    const [ showLogin, setShowLogin ] = useState(false)

  return (
    <div>
        <button onClick={() => {
            setShowLogin(true)
        }}>Login</button>

        <Modal showModal = {showLogin} className="modal" setShowModal= {setShowLogin} title = "Iniciar sesión"> 
           <p>Iniciar sesión.</p>
        </Modal>


    </div>
  )
}
