import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({name : "",email : "",password : "",cpassword : ""});
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  const handleSubmit=async (e) => {
    //In order to prevent unwanted page reload    
    e.preventDefault();
    const {name,email,password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser",{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({name,email,password})
    }
    );
    const json = await response.json();
    console.log(json);
    // save the auth token and redirect
    if(json.success){
      localStorage.setItem('token',json.authtoken); 
      navigate('/login');
    }else{
      alert("Invalid Credentials")
    }
  }
  return (
    <div className="container"  >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" onChange={onChange} className="form-control" value={credentials.name} id="name" name="name"   aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" onChange={onChange} className="form-control" value={credentials.email} id="email" name="email"  aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" onChange={onChange} className="form-control" value={credentials.password} minLength={5} id="password" name="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" onChange={onChange} className="form-control" value={credentials.cpassword} minLength={5} id="cpassword" name="cpassword"  />
        </div>
        <button type="submit" disabled={credentials.password!==credentials.cpassword} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUp