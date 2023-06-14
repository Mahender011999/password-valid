 import React, { useState } from 'react'
 import './App.css'
 const App = () => {
  const [password,setPassword] = useState("")
  const [message,setMessage] = useState(false)

  const checkPasword = (e) =>{
    if (password.length <= 8){
      setMessage(true)
      e.preventDefault()
      setPassword("")
      
    }
   
  }
  const handelSubmit= (e)=>{
    setPassword(e.target.value)
     
  }

   return (
     <div className='container1'>
        <div className='container2'>
        <center>
        <h1>Password Validator</h1>
        <p style={{color:"#ffffff"}}>check your Password and secure is your Password</p>
        <form onSubmit={checkPasword}>
        <input type='password' id='password' name='password' value={password} onChange={handelSubmit} />
        </form>
        <p className='para'>{message ? '*Your password must be atleast 8 char':''}</p>
        </center>
        </div>
     </div>
   )
 }
 
 export default App
 