import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../Utilities/Firebase.init";
import useToken from "../../Hooks/useToken";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";

const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const from = location.state?.from?.pathname || "/";

    const imageStorageKey = "f72b24bd5ba10548faef333ddb8df230";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [createUserWithEmailAndPassword, signupUser, , signupError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [token] = useToken(signupUser || googleUser);

    const handleSignup = async (data) => {
        setLoading(true);

        const image = data.image[0];

        const formData = new FormData();
        formData.append("image", image);
        console.log(formData);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then(async (result) => {
                if (result.success) {
                    const displayName = data.name;
                    const photoURL = result.data.url;
                    await createUserWithEmailAndPassword(data.email, data.password);
                    await updateProfile({ displayName, photoURL });
                    setLoading(false);
                    toast.success("Account create successfully!");
                    reset();
                }
            });
    };

    useEffect(() => {
        if (token) {
            signOut(auth);
            navigate("/login");
        }
    }, [from, navigate, token]);

    useEffect(() => {
        if (googleError) {
            toast.error(googleError?.message);
        }
        if (signupError) {
            toast.error(signupError?.message);
        }
    }, [signupError, googleError]);

    return (
        <section className="pb-20 px-5">
            <div className="card-body sm:w-[390px] mx-auto shadow mt-14 ">
                <h2 className="text-2xl text-center font-semibold">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: { value: true, message: "Name is required" } })} type="text" placeholder="Your Name" className="input input-bordered" />

                        {errors.name?.type === "required" && <span className="label text-error text-sm">{errors.name.message}</span>}
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <input {...register("image", { required: { value: true, message: "Product Image is required" } })} type="file" className="input input-bordered" />

                        {errors.image?.type === "required" && <span className="label text-error text-sm">{errors.image.message}</span>}
                        {/* {isUpload && <span className="label text-error text-sm">Uploading...</span>} */}
                    </div>
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
                                    value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/g,
                                    message: "Please input valid email address",
                                },
                            })}
                            type="email"
                            placeholder="Your Email"
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
                            placeholder="Enter new password"
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
                        <button type="submit" className={`btn ${loading && "loading"} btn-primary`}>
                            Create Account
                        </button>
                    </div>
                </form>
                <p className="text-sm text-center">
                    Already have an account?{" "}
                    <Link className="text-primary font-body" to="/login">
                        Login
                    </Link>
                </p>
                <div className="divider">OR</div>
                <div className="form-control">
                    <button onClick={async () => await signInWithGoogle()} className={`btn ${googleLoading && "loading"} btn-secondary`}>
                        CONTINUE WITH GOOGLE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Signup;
