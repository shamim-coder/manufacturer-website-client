import { useQuery } from "@tanstack/react-query";

const useOrders = () => {
    const {
        isLoading,
        error,
        data: orders,
        refetch,
    } = useQuery(["orders"], async () => {
        const res = await fetch(`http://localhost:5000/orders`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        return await res.json();
    });

    return { orders, isLoading, error, refetch };
};

export default useOrders;
