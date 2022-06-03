import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const navigate = useNavigate();

    // Login Access 
    const access = {
        admin: {
            username: "admin",
            password: "admin"
        },
        doctor: {
            username: "doctor",
            password: "doctor"
        },
        staff: {
            username: "staff",
            password: "staff"
        },
    }

    // Handling Login 
    const handleLogin = e => {
        e.preventDefault();
        const inputUser = e.target.username.value;
        const inputPassword = e.target.password.value;

        if(access.admin.username == inputUser && access.admin.password == inputPassword){
            navigate('/dashboard/admin')
        }
        else if(access.doctor.username == inputUser && access.doctor.password == inputPassword) {
            navigate('/dashboard/doctor')
        }
        else if(access.staff.username == inputUser && access.staff.password == inputPassword) {
            navigate('/dashboard/staff')
        }
        else{
            return;
        }
    }

    return (
        <div className='login-container'>
             <div className='login-form-box'>
                 <h1 className='login-heading'>Medi Portal</h1>
                <form onSubmit={handleLogin}>
                    <input type="text" name='username' placeholder='Type Username' /> <br />
                    <input type="password" name='password' placeholder='Type Password' /> <br />
                    <button>Login</button>
                </form>
             </div>
        </div>
    );
};

export default Login;