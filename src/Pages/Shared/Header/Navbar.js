import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Assets/logo.png";

const Navbar = () => {
    return (
        <nav className="container mx-auto">
            <div class="navbar bg-base-100 p-0 py-5">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li tabindex="0">
                                <a class="justify-between">
                                    Parent
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </a>
                                <ul class="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Item 3</a>
                            </li>
                        </ul>
                    </div>
                    <Link to="/">
                        <img className="w-[150px]" src={Logo} alt="" />
                    </Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 gap-10">
                        <li>
                            <NavLink to={"/"} className="uppercase font-semibold tracking-wide">
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/products"} className="uppercase font-semibold">
                                All Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard"} className="uppercase font-semibold">
                                Dashboard
                            </NavLink>
                        </li>
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
                <div class="navbar-end">
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
