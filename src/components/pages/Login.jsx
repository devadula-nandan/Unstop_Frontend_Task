import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setIsAuthenticated}) {
    const navigate = useNavigate()
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>{setIsAuthenticated(true);navigate("/dashboard")}}>Login</button>
    </div>
  )
}

export default Login