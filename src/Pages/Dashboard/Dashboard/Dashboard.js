import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faRankingStar, faUser, faPlus, faListCheck, faBasketShopping, faUsers } from "@fortawesome/free-solid-svg-icons";
import useProfile from "../../../Hooks/useProfile";

const Dashboard = () => {
    const { profile } = useProfile();
    return (
        <section>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content w-full px-10">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <aside className="drawer-side border shadow-lg">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <NavLink className="font-body font-semibold" to="profile">
                                <FontAwesomeIcon icon={faUser} /> My Profile
                            </NavLink>
                        </li>
                        {profile?.role !== "admin" ? (
                            <>
                                <li>
                                    <NavLink className="font-body font-semibold" to="my-orders">
                                        <FontAwesomeIcon icon={faBagShopping} /> My Orders
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="font-body font-semibold" to="add-review">
                                        <FontAwesomeIcon icon={faRankingStar} /> Add Review
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink className="font-body font-semibold" to="add-product">
                                        <FontAwesomeIcon icon={faPlus} /> Add Product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="font-body font-semibold" to="manage-products">
                                        <FontAwesomeIcon icon={faListCheck} /> Manage Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="font-body font-semibold" to="manage-orders">
                                        <FontAwesomeIcon icon={faBasketShopping} /> Manage Orders
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="font-body font-semibold" to="manage-users">
                                        <FontAwesomeIcon icon={faUsers} /> Manage Users
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </aside>
            </div>
        </section>
    );
};

export default Dashboard;
