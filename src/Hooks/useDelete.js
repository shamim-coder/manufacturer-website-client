import { useQuery } from "@tanstack/react-query";

const useDelete = (API) => {
    const {
        isLoading: deleteLoading,
        error,
        data: result,
        refetch,
    } = useQuery(["delete", API], async () => {
        const res = await fetch(API, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        return await res.json();
    });

    return { result, deleteLoading, error, refetch };
};

export default useDelete;
