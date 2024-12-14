import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const firstLetter = user?.email.charAt(0).toUpperCase();
    const handleSignOut = () => {
        logOut()
            .then(data => {
                Swal.fire({
                    title: "Success",
                    text: "Sign out successfully",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    const links = <>
        <li className='text-base font-medium mr-2'><NavLink to="/">Home</NavLink></li>
        {
            user && <>
                <li className="text-base font-medium mr-2"><NavLink to="/add-jobs">Add jobs</NavLink></li>
                <li className="text-base font-medium mr-2"><NavLink to="/all-jobs">All jobs</NavLink></li>
                <li className="text-base font-medium mr-2"><NavLink to="/my-applications">My Applications</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className=" flex items-center w-12 font-bold text-2xl ">
                    <img className='' src="https://img.icons8.com/?size=100&id=44834&format=png&color=000000" alt="" />
                    JobBox</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user.photoURL === null ? <>
                                            <p className='bg-red-500 w-full h-full text-white font-bold text-3xl'>{firstLetter}</p>
                                        </> :
                                            <>
                                                <img
                                                    alt={user?.displayName}
                                                    src={user?.photoURL} />
                                            </>
                                    }
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        {user?.email}
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><button onClick={handleSignOut}>Logout</button></li>
                            </ul>
                        </div>
                    </> :

                        <>
                            <NavLink to="/register" className="btn text-white bg-blue-500 mr-4 hover:-mt-1">Register</NavLink>
                            <NavLink to="/signIn" className="btn mr-4 bg-blue-500 text-white hover:-mt-1">SignIn</NavLink>
                        </>
                }

            </div>

        </div>
    );
};

export default Navbar;