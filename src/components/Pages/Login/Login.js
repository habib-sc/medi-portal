import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login-container'>
             <div className='login-form-box'>
                 <h1 className='login-heading'>Medi Portal</h1>
                <form>
                    <input type="email" placeholder='Type Email' /> <br />
                    <input type="password" placeholder='Type Password' /> <br />
                    <button>Login</button>
                </form>
             </div>
        </div>
    );
};

export default Login;