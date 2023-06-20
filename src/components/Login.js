import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({email : "",password : ""})
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  const handleSubmit=async (e) => {
    //In order to prevent unwanted page reload    
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login",{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email : credentials.email,password : credentials.password})
    }
    );
    const json = await response.json();
    console.log(json);
    if(json.success){
      // save the auth token and redirect
      //We are saving auth in order to use it as a unique identifier for each user
      localStorage.setItem('token',json.authToken); 
      navigate('/');
      props.showAlert("Logged in Successfully","success")
    }else{
      props.showAlert("Invalid Credentials","danger")
    }
  }
  return (
    <div>
      <h2>Login to continue to NotesNation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" onChange={onChange} value={credentials.email} className="form-control" id="email" name="email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" onChange={onChange} value={credentials.password} name="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login