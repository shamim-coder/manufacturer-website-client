import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../../Components/Spinner/Spinner";
import useProfile from "../../../Hooks/useProfile";
import auth from "../../../Utilities/Firebase.init";

const RequireUser = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const { profile, isLoading } = useProfile();
    const location = useLocation();

    if (loading || isLoading) {
        return <Spinner />;
    }

    if (!user || profile?.role === "admin") {
        signOut(auth);
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireUser;
