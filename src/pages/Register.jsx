import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottie from '../assets/lottie/register.json'
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {name} = useContext(AuthContext);
    console.log(name)
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col gap-6 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className='md:w-96 w-72 md:ml-14 ml-0'>
                        <Lottie animationData={registerLottie}></Lottie>
                    </div>
                </div>
                <div className="card p-6 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl text-center font-bold">Register now!</h1>
                    <div className="card-body">
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-500 hover:bg-blue-600 text-white">Submit & Register</button>

                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <button className="btn bg-blue-500 hover:bg-blue-600 text-white">SignIn with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;