import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../axios-instance";
import { queryKeys } from "../react-query/constants";
import { Products } from "../types";

type useProductType = {
    data: Products | undefined
    isLoading: boolean
    error: Error | null
    isError: boolean
}

const useProduct = (productID: string | undefined): useProductType => {
    const { data, isLoading, error, isError } = useQuery({
        queryKey: [queryKeys.SINGLEPRODUCT],
        queryFn: () => getSingleProduct(productID),
    })

    return { data, isLoading, error, isError }
}


export default useProduct