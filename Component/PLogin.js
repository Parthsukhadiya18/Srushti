import React, { useState } from 'react'
import axois from 'axois'

function PLogin() {

     const [formData, setFormData] = useState({
    
        email: "",
        password: "",
      })
      const [message, setMessage] = useState(0);
      const [userRole,setUserRole]=useState("");
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev, [name]: value,
        }))
      }
    
      const handleSubmit = async(e) => {
        e.preventDefault();
           try {
                         const responce= await axois.post("",formData);
                         setMessage(responce.data.message)
                          setUserRole();
                      
                         
                      } catch (error) {
                         setMessage("error connect to server")
                      }
    
        setFormData(({
    
          email: "",
          password: "",
        }))
    
    
      }
  return (
    <div>Login

{message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>

        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
        {userRole && userRole===admin ?("admin"):("user")}
    </div>
  )
}

export default PLogin