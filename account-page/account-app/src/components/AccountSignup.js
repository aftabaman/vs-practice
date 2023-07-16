import React from 'react'
import { Link } from 'react-router-dom';
import './../styles/signup-style.css';

export default function AccountSignup() {

  

  return (
    <div className='signup-container'>
      <h2 className="title">
                Signup
            </h2>
            <form action="" className='signup-form'>

                <label htmlFor="signup-name"> Name </label>
                <input type="text" name='signup-name'/>
                <label htmlFor="signup-pass"> Password </label>
                <input type="password" name='sighnup-pass'/>
                
                <Link to="/success"> <input type="submit" value="Sign up" id="submit-btn" /></Link>

            </form>
            <div>
                <h4>Already have account? <Link to="/login">Login</Link></h4>
            </div>
    </div>
  )
}
