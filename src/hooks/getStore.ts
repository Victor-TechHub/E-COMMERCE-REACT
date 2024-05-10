import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "../react-query/constants"
import { getProducts } from "../axios-instance"
import { getStoreType } from "../types"
import { useState } from "react"

export const getStore = (): getStoreType => {
    const [page, setPage] = useState(0)

    const { data, isLoading, isStale } = useQuery({
        queryKey: [queryKeys.PRODUCTS, page],
        queryFn: () => getProducts(page),
        // keepPreviousData: true
    })

    const nextPage = () => {
        setPage(prev => prev + 8)
    }

    const previousPage = () => {
        setPage(prev => prev - 8)
    }

    return { data, isLoading, isStale, previousPage, nextPage, page }
}