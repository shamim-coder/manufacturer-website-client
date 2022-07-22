import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Utilities/Firebase.init";
import useToken from "../../Hooks/useToken";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    // get access token and verify with signin and google user
    const [token] = useToken(user || googleUser);

    const handleLogin = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);
        reset();
    };

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, token]);

    useEffect(() => {
        if (googleError) {
            toast.error(googleError?.message);
        }
        if (error) {
            toast.error(error?.message);
        }
    }, [error, googleError]);

    return (
        <section className="pb-20 px-5">
            <div className="card-body sm:w-[390px] mx-auto shadow mt-14">
                <h2 className="text-2xl text-center font-semibold">Login</h2>
                {googleError || error ? "" : undefined}

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,
                                    message: "Please input valid email address",
                                },
                            })}
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                        />
                        {errors.email?.type === "required" && <span className="label text-error text-sm">{errors.email.message}</span>}

                        {errors.email?.type === "pattern" && <span className="label text-error text-sm">{errors.email.message}</span>}
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is required",
                                },
                                pattern: {
                                    value: /(?=.*?[a-z])(?=.*?[0-9]).{6,}/g,
                                    message: "Password should at least one digit, one letter and minimum 6 characters",
                                },
                            })}
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                        />
                        {errors.password?.type === "required" && <span className="label text-error text-sm">{errors.password.message}</span>}

                        {errors.password?.type === "pattern" && <span className="label text-error text-sm">{errors.password.message}</span>}
                        <label className="label">
                            <Link to="/forgot" className="label-text-alt link link-hover font-body">
                                Forgot password?
                            </Link>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className={`btn ${loading && "loading"} btn-primary`}>Login</button>
                    </div>
                </form>
                <p className="text-sm text-center">
                    New to Dewalt?{" "}
                    <Link className="text-primary font-body" to="/signup">
                        Create new account
                    </Link>
                </p>
                <div className="divider">OR</div>
                <div className="form-control">
                    <button onClick={async () => await signInWithGoogle()} className={`btn ${googleLoading && "loading"} btn-secondary`}>
                        Continue With Google
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;
