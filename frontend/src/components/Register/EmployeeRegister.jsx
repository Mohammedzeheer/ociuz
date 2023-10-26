import React, { useState } from 'react';
import { Axios } from '../../api/axiosInstance';
import { toast } from 'react-toastify';
import './empRegister.css';
import { useNavigate } from 'react-router-dom';

function EmployeeRegister() {
  const navigate=useNavigate()
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    address: '',
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Check if any of the fields are empty
      if (Object.values(user).some(value => value.trim() === '')) {
        toast.error('Please fill out all fields');
        return;
      }

      const response = await Axios.post('employees', { ...user });
      console.log(response);
      if (response) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <div className="body">
    <div className="registers p-[4rem]">

        <div className="containerS">
          <h2>Register</h2>
          <input
            type="text"
            required
            placeholder="Username"
            name="name"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            className="input"
            />
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            className="input"
          />
          <input
            type="text"
            required
            placeholder="PhoneNumber"
            name="phone"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            className="input"
          />
          <input
            type="text"
            required
            placeholder="Designation"
            name="designation"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            className="input"
          />
          <input
            type="text"
            required
            placeholder="Address"
            name="address"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            className="input"
          />
          <button type="submit" onClick={handleSubmit} className="button">
            Register
          </button>
            </div>

        
        </div> 
        <div className="text-center">
  <button onClick={() => navigate(-1)} className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
    Back
  </button>
</div>

     </div>
    
     
    </>
  );
}

export default EmployeeRegister;










// import React, { useState,useEffect } from 'react'
// // import {useNavigate} from 'react-router-dom'
// import {Axios} from '../../api/axiosInstance'
// import {toast } from 'react-toastify'
// import './empRegister.css'

// function EmployeeRegister() {
    
//     const [user,setUser]=useState({
//         name:" ",
//         email:" ",
//         phone:" ",
//         designation:" ",
//         address:" ",
//     })
    
     
//     const handleSubmit = async (e) => {
//         try {
//            e.preventDefault()
//             const response = await Axios.post("employees",{ ...user })
//             console.log(response)
//             if(response){
//                toast.success(response.data.message)
//             }
           
//         } catch (error) {
//           console.log(error)
//         }
//     }


//   return (
//     <>
//     <div className="bodySignup">
//     <div className="containerS">  
//     <h2>Register</h2>
//     <input type="text" required  placeholder="Username" name="name" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}   className="input" />
//      <input type="email" required  placeholder="Email" name="email" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}  className="input" />
//      <input type="text" required  placeholder="PhoneNumber" name="phone" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}  className="input" />
//      <input type="text" required  placeholder="Designation" name="designation" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}  className="input" />
//      <input type="text" required  placeholder="Address" name="address" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}  className="input" />
//        <button type="submit" onClick={handleSubmit} className="button">Register</button>            
//      </div>
//     </div>
//     </>
//   )
// }

// export default EmployeeRegister