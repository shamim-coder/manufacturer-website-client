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
        const res = await fetch(`http://localhost:5000/update-user/${user.email}`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(),
        });
        return await res.json();
    });

    return { profile, isLoading, error, refetch };
};

export default useProfile;
