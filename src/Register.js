import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import './Register.css';

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }
        if (!email.includes('@')) {
            setError('Invalid email address.');
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess('Registration successful! Redirecting to login...');
            setTimeout(() => {
                navigate('/');
            }, 3000); // Redirect after 3 seconds
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                setError('Email already in use. Please use a different email.');
            } else {
                setError('Failed to create account. Try again.');
            }
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Create a DEV@Deakin Account</h2> {/* Updated header */}
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <label htmlFor="name">First Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="register-button">Sign Up</button>
                </form>
                <p>
                    Already have an account? <a href="/">Login here</a>.
                </p>
            </div>
        </div>
    );
}

export default Register;
