import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setRegisterData } from '../stores/auth'

function Register() {
    const [formData,setFormData] = useState({fullname:"",username:"",email:"",password:""})
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:5055/api/account/register",formData);
            console.log("Succedd",response.data)
            dispatch(setRegisterData(formData))
            setFormData({});
            window.location.href="http://localhost:3000/login"
        }catch(e){
            console.error(e);
        }
    }
  return (
    <>
    <Nav/>
    <div className='login'>
        <form onSubmit={handleSubmit} className='login__form' >
        <h2>Qeydiyyat</h2>
        <div className="login__form--fullname">
                <label htmlFor="Fullname">Ad Soyad</label>
                <input type="text" id='Fullname' name='Fullname' onChange={handleChange}/>
            </div>
            <div className="login__form--username">
                <label htmlFor="Username">Username</label>
                <input type="text" id='Username' name='Username'  onChange={handleChange}/>
            </div>
            <div className="login__form--email">
                <label htmlFor="Email">Email</label>
                <input type="email" id='Email' name='Email' onChange={handleChange}/>
            </div>
            <div className="login__form--password">
                <label htmlFor="Password">Şifrə</label>
                <input type="password" id='Password' name='Password' onChange={handleChange}/>
            </div>
            <button>Daxil ol</button>
        </form>
    </div>
    </>
    
  )
}

export default Register