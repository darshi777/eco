import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";
import { useAuth } from '../../context/auth';
const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[auth,setAuth]=useAuth()
    const navigate = useNavigate();
    const location= useLocation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/login', { email, password });
            if (res && res.data.success) {
                toast.success(res.data.message,{ autoClose: 5000 });
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token,
                })
                localStorage.setItem('auth',JSON.stringify(res.data));
                navigate(location.state||'/');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Please try again later.");
        }
    };
  return (
    <Layout title="Register - Ecommerce App">
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Enter your password" required />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>Forgot Password</button>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </Layout>
  )
}

export default Login