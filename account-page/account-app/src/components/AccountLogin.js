import React from 'react'
import './../styles/login-style.css';
import { Link } from 'react-router-dom';

export default function AccountLogin() {
    console.log("login")
  return (
    
        <div className="login-container">
            <h2 className="title">
                Login
            </h2>
            <form action="" className='login-form'>

                <label htmlFor="login-name"> Name </label>
                <input type="text" name='login-name'/>
                <label htmlFor="login-pass"> Password </label>
                <input type="password" name='login-pass'/>
                
                <Link to="/success"> <input type="submit" value="Login" id="submit-btn" /></Link>

            </form>
            <div>
                <h4>New user? <Link to="/signup">create account</Link></h4>
            </div>
        </div>
   
  )
}
