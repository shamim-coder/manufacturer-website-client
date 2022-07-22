import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Assets/logo.png";
import auth from "../../../Utilities/Firebase.init";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    console.log(location);

    return (
        <nav className="container mx-auto">
            <div className="navbar bg-base-100 p-0 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost btn-circle lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </label>

                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to={"/"} className="uppercase font-semibold tracking-wide">
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={"/all-products"} className="uppercase font-semibold">
                                    All Products
                                </NavLink>
                            </li>
                            {user && (
                                <li>
                                    <NavLink to={"/dashboard"} className="uppercase font-semibold">
                                        Dashboard
                                    </NavLink>
                                </li>
                            )}
                            <li>
                                <NavLink to={"/portfolio"} className="uppercase font-semibold">
                                    Portfolio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/blog"} className="uppercase font-semibold">
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/">
                        <img className="w-[150px]" src={Logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-10">
                        <li>
                            <NavLink to={"/"} className="uppercase font-semibold tracking-wide">
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/all-products"} className="uppercase font-semibold">
                                All Products
                            </NavLink>
                        </li>
                        {user && (
                            <li>
                                <NavLink to={"/dashboard"} className="uppercase font-semibold">
                                    Dashboard
                                </NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink to={"/portfolio"} className="uppercase font-semibold">
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/blog"} className="uppercase font-semibold">
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {location.pathname.includes("/dashboard") && (
                        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost lg:hidden mr-5 drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-9 h-9 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    )}

                    {user ? (
                        <div className="dropdown dropdown-end">
                            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="" />
                                </div>
                            </label>
                            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to="/dashboard/profile" className="justify-between">
                                        {user ? <strong>{user.displayName}</strong> : "Profile"}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link onClick={() => signOut(auth)} to="/login">
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <ul className="menu menu-horizontal p-0 gap-10">
                            <li>
                                <NavLink to={"/login"} className="uppercase font-semibold">
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
