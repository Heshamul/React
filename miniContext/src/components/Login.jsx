import React, {useContext,useState} from 'react'
import UserContext from '../context/Usercontext'

function Login() {
    const[username,setusername]=useState('null');
    const[password,setpassword]=useState('null');

    const {setuser}=useContext(UserContext); //yeh hm use contex wali file se set user use kr rahe hai


    const handleSubmit=(e)=>{
        e.preventDefautt();
        setuser({username,password})//aiese data bheja jata hai
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e)=>setusername(e.target.value)} //yeh event .target.value koi bhee event wahan change ho toh set username ko paas hogi value
         placeholder='Username' />
        <input type='text' 
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        placeholder='Password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login