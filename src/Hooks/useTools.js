import { useQuery } from "@tanstack/react-query";

const useTools = () => {
    const {
        isLoading,
        error,
        data: tools,
        refetch,
    } = useQuery(["tools"], async () => {
        const res = await fetch(`https://dewalt-bd.herokuapp.com/tools`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        return await res.json();
    });

    return { tools, isLoading, error, refetch };
};

export default useTools;
