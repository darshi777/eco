import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/register', { name, email, password, phone, address,answer });
            if (res && res.data.success) {
                toast.success(res.data.message,{ autoClose: 5000 });
                navigate('/login');
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
                <h1>Register Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder="Enter your password" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="phone" placeholder="Enter your Phone Number" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address">Address</label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="address" placeholder="Enter your Address" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address">Answer</label>
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="answer" placeholder="What is your favourite food" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </Layout>
    );
}

export default Register;
