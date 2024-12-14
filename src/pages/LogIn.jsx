import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginLottie from '../assets/lottie/login.json'
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
const LogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state || '/';
    const { googleSignIn, setUser, logInWithEmailAndPassword } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: "Success",
                        text: "Successfully Signed in with Google",
                        icon: "success",
                    })
                    navigate(from)
                }
                setUser(result.user);
            })
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInWithEmailAndPassword(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: "Success",
                        text: "Successfully Signed in",
                        icon: "success",
                    })
                    navigate(from)
                }
                setUser(result.user);
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col gap-6 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className='md:w-96 w-72 md:ml-14 ml-0'>
                        <Lottie animationData={loginLottie}></Lottie>
                    </div>
                </div>
                <div className="card p-6 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl text-center font-bold">SignIn now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-500 hover:bg-blue-600 text-white">Submit & SignIn</button>

                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn} className="btn bg-blue-500 hover:bg-blue-600 text-white">SignIn with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;