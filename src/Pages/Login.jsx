import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../Pages/AuthProvider';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import AdBanner from './components/AdBanner'; // AdBanner component import करो

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, GoogleAuthProvider);
            Swal.fire({
                title: 'Logged in with Google!',
                icon: 'success',
                text: 'Welcome back!'
            });
            navigate('/home');
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Login Failed',
                icon: 'error',
                text: error.message
            });
        }
    };

    async function loginHandler(data) {
        const { email, password } = data;
        try {
            await login(email, password);
            Swal.fire({
                title: 'Log in Successful',
                icon: 'success',
                text: 'Press Ok to continue'
            });
            reset();
            navigate('/home');
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100"
            style={{
                background: 'linear-gradient(to right, #667eea, #764ba2)',
                padding: '20px'
            }}
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
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control bg-transparent text-white border-light"
                            {...register('email', { required: true })}
                            placeholder="Enter Your Email"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control bg-transparent text-white border-light"
                            {...register('password', { required: true })}
                            placeholder="Enter Your Password"
                        />
                    </div>

                    <p className="text-white">
                        Don't have an account?
                        <Link className="text-warning ms-1 text-decoration-none" to="/signup">Signup</Link>
                    </p>

                    <button className="btn btn-outline-light w-100 mb-3" type="submit">Login</button>
                </form>

                {/* AdSense Ad: Form ke neeche */}
                <div className="my-3">
                    <AdBanner slot="7664759602" format="auto" />
                </div>

                <div className="text-center">
                    <p className="my-3">or</p>

                    <button
                        onClick={handleGoogleLogin}
                        className="btn w-100 mb-2 d-flex align-items-center justify-content-center gap-2"
                        style={{
                            backgroundColor: '#ffffff',
                            color: '#000',
                            border: '1px solid #ccc',
                        }}
                    >
                        <i className="fab fa-google text-danger"></i> Continue with Google
                    </button>

                    <button
                        className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                        style={{
                            backgroundColor: '#1877F2',
                            color: '#fff',
                            border: 'none',
                        }}
                    >
                        <i className="fab fa-facebook-f"></i> Continue with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
