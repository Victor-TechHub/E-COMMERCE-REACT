import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "../react-query/constants"
import { getProducts } from "../axios-instance"
import { getStoreType } from "../types"

export const getStore = (): getStoreType => {
    const { data, isLoading } = useQuery({
        queryKey: [queryKeys.PRODUCTS],
        queryFn: getProducts
    })

    return { data, isLoading }
}