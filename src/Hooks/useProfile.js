import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Utilities/Firebase.init";

const useProfile = () => {
    const [user] = useAuthState(auth);

    const {
        isLoading,
        error,
        data: profile,
        refetch,
    } = useQuery(["profile", user], async () => {
        const res = await fetch(`https://dewalt-bd.herokuapp.com/user/${user.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        return await res.json();
    });

    return { profile, isLoading, error, refetch };
};

export default useProfile;
