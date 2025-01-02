import React, { useState } from "react";

function RegistationForm() {
    const[formData,setFormData]=useState({
        username:"",
        email:"",
        password:"",
        role:"user",
    })
    const[message,setMessage]=useState(0);

    const handleChange=(e)=>{
       const{name,value}=e.target;
       setFormData(prev=>({
            ...prev,[name]:value,
       }))
    }

    const handleSubmit =(e)=>{
         e.preventDefault();
         const {username,email,password}=formData;
         if(!username||!email||!password){
            setMessage("all feild required!")
         }
     
         const users=JSON.parse(localStorage.getItem("users"))||[]
         users.push(formData);
         localStorage.setItem("users",JSON.stringify(users))

         setFormData(({
            username:"",
            email:"",
            password:"",
        }))

        setMessage("registation successful!");
    }
  return (
    <div>
      RegistationForm

      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="user">user</option>
          <option value="admin" >admin</option>

        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistationForm;
