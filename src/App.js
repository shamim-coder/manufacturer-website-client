import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/Authentication/Login";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Signup from "./Pages/Authentication/Signup";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import ToolDetails from "./Pages/ToolDetails/ToolDetails";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Pages/NotFound/NotFound";
import ScrollToTop from "./Pages/Shared/ScrollToTop/ScrollToTop";
import Checkout from "./Pages/Checkout/Checkout";
import { createContext, useState } from "react";
import Confirmed from "./Pages/Checkout/Confirmed";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Profile from "./Pages/Dashboard/Profile/Profile";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import ManageUsers from "./Pages/Dashboard/ManageUsers/ManageUsers";
import AddProduct from "./Pages/Dashboard/AddProducts/AddProduct";
import Payment from "./Pages/Dashboard/MyOrders/Payment";
import RequireAdmin from "./Pages/Shared/RequireAdmin/RequireAdmin";
import RequireUser from "./Pages/Shared/RequiteUser/RequiteUser";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blogs from "./Pages/Blogs/Blogs";

export const OrderContext = createContext({});

function App() {
    const [orderInfo, setOrderInfo] = useState({});

    return (
        <OrderContext.Provider value={{ orderInfo, setOrderInfo }}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/tool-details/:id"
                    element={
                        <RequireAuth>
                            <ToolDetails />
                        </RequireAuth>
                    }
                />

                <Route
                    path="/checkout/:id"
                    element={
                        <RequireAuth>
                            <Checkout />
                        </RequireAuth>
                    }
                />

                <Route
                    path="/order-confirm/:id"
                    element={
                        <RequireAuth>
                            <Confirmed />
                        </RequireAuth>
                    }
                />

                <Route
                    path="dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route index element={<Profile />} />

                    <Route path="profile" element={<Profile />} />
                    <Route
                        path="my-orders"
                        element={
                            <RequireUser>
                                <MyOrders />
                            </RequireUser>
                        }
                    />
                    <Route
                        path="my-orders/payment/:id"
                        element={
                            <RequireUser>
                                <Payment />
                            </RequireUser>
                        }
                    />
                    <Route
                        path="add-review"
                        element={
                            <RequireUser>
                                <AddReview />
                            </RequireUser>
                        }
                    />

                    <Route
                        path="add-product"
                        element={
                            <RequireAdmin>
                                <AddProduct />
                            </RequireAdmin>
                        }
                    />
                    <Route
                        path="manage-products"
                        element={
                            <RequireAdmin>
                                <ManageProducts />
                            </RequireAdmin>
                        }
                    />
                    <Route
                        path="manage-orders"
                        element={
                            <RequireAdmin>
                                <ManageOrders />
                            </RequireAdmin>
                        }
                    />
                    <Route
                        path="manage-users"
                        element={
                            <RequireAdmin>
                                <ManageUsers />
                            </RequireAdmin>
                        }
                    />
                </Route>

                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot" element={<ForgotPassword />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <ToastContainer position="top-center" />
            <ScrollToTop />
        </OrderContext.Provider>
    );
}

export default App;
