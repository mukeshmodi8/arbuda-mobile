import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from './AuthProvider';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import AdBanner from "../Components/AdBanner"; // ✅ सही Import

const auth = getAuth();

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            Swal.fire("Logged in with Google!", "", "success");
            navigate('/home');
        } catch (error) {
            Swal.fire("Login Failed", error.message, "error");
        }
    };

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            Swal.fire("Login Successful", "", "success");
            reset();
            navigate('/home');
        } catch (error) {
            Swal.fire("Login Failed", error.message, "error");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100"
            style={{ background: 'linear-gradient(to right, #667eea, #764ba2)', padding: '20px' }}
        >
            <div className="col-12 col-md-8 col-lg-5 p-4 rounded-4 text-white"
                style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                }}
            >
                <h2 className="text-center mb-4 fw-bold">Please Login</h2>

                <form onSubmit={handleSubmit(loginHandler)}>
                    <input
                        type="email"
                        className="form-control mb-3 bg-transparent text-white border-light"
                        {...register('email', { required: true })}
                        placeholder="Enter Email"
                    />
                    <input
                        type="password"
                        className="form-control mb-3 bg-transparent text-white border-light"
                        {...register('password', { required: true })}
                        placeholder="Enter Password"
                    />

                    <p className="text-white">
                        Don't have an account? <Link className="text-warning" to="/signup">Signup</Link>
                    </p>

                    <button className="btn btn-outline-light w-100 mb-3" type="submit">Login</button>
                </form>

                {/* AdSense Ad */}
                <div className="my-3">
                    <AdBanner />
                </div>

                <div className="text-center">
                    <p className="my-3">or</p>

                    <button onClick={handleGoogleLogin} className="btn btn-light w-100 mb-2 d-flex align-items-center justify-content-center gap-2">
                        <i className="fab fa-google text-danger"></i> Continue with Google
                    </button>

                    <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2">
                        <i className="fab fa-facebook-f"></i> Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
