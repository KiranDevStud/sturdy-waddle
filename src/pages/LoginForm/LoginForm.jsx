import React from 'react';
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './LoginForm.css';
import '../Programmes/Programmes'
function LoginForm() {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                    <FaUserAlt className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon'/>
                </div>

                <div className='remember-forgot'>
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <Link to="/home"> {/* Wrapping the button with Link */}
                    <button type="submit">Login</button>
                </Link>

                <div className='register-link'>
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
