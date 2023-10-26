import React, { useState,useEffect } from 'react'
// import {useNavigate} from 'react-router-dom'
import {Axios} from '../../api/axiosInstance'
import { ToastContainer, toast } from 'react-toastify'
import './empRegister.css'

function EmployeeRegister() {
    
    const [user,setUser]=useState({
        name:" ",
        email:" ",
        phone:" ",
        designation:" ",
        address:" ",
    })
    
    const generateError = (err) => toast.error(err, {
        position: "bottom-right"
    })
     
    const handleSubmit = async (e) => {
        try {
           e.preventDefault()
            const response = await Axios.post("employees",{ ...user })
        } catch (error) {
          console.log(error)
        }
    }

 

  return (
    <div className="bodySignup">
    <div className="containerS">  
    <h2>Register</h2>
    <input type="text" placeholder="Username" name="name" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} required className="input" />
     <input type="email" placeholder="Email" name="email" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} required className="input" />
     <input type="text" placeholder="PhoneNumber" name="phone" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} required className="input" />
     <input type="text" placeholder="Designation" name="designation" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} required className="input" />
     <input type="text" placeholder="Address" name="address" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} required className="input" />
       <button type="submit" onClick={handleSubmit} className="button">Register</button>            
    </div>
    <ToastContainer />
    </div>
  )
}

export default EmployeeRegister