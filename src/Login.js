import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      id: '',
      username: username,
      password: password
    };
    
    try {
      const response = await axios.post('http://localhost:8080/checkLogin', data);
      // Handle successful response
      console.log(response.data);
      if(response.data==="Login success")
      {
        
        //alert(response.username);
        navigate("/Home");
      //  console.log(response.data);
       
        
      }
      else{

      alert(response.data);
      
        // navigate("/Home");
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
      
  

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <h2>L O G I N</h2>

        <div className="user-box">
          <input type="text" name="" required value={username} onChange={handleEmailChange} />
          <label>UserName</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required value={password} onChange={handlePasswordChange} />
          <label>Password</label>
        </div>
        
        {/* <button href="/signup" className='pass-button'>Sign Up</button> */}

        {/* <button href="#text-buttons" className='pass-button'>Signup</button> */}
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button type="submit" className='btn btn-info '> LOGIN </button>
          
        </a>
      </form>
      <Link to="../Registration"className='btn btn-warning'>
          Don't Have An Account? Register
           </Link>
    </div>
  );
}

export default Login;