import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
    const {
        isLoading,
        error,
        data: reviews,
        refetch,
    } = useQuery(["reviews"], async () => {
        const res = await fetch(`https://dewalt-bd.herokuapp.com/reviews`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        return await res.json();
    });

    return { reviews, isLoading, error, refetch };
};

export default useReviews;
