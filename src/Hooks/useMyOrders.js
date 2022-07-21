import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Utilities/Firebase.init";

const useMyOrders = () => {
    const [user] = useAuthState(auth);
    
    const {
        isLoading,
        error,
        data: myOrders,
        refetch,
    } = useQuery(["myOrders"], async () => {
        const res = await fetch(`http://localhost:5000/my-orders?email=${user?.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        return await res.json();
    });

    return { myOrders, isLoading, error, refetch };
};

export default useMyOrders;
