import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const {
        isLoading,
        error,
        data: users,
        refetch,
    } = useQuery(["users"], async () => {
        const res = await fetch(`http://localhost:5000/users`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        return await res.json();
    });

    return { users, isLoading, error, refetch };
};

export default useUsers;
