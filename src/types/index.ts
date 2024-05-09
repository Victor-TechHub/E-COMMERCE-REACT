import { ReactNode } from "react"

export interface Products {
    id: number,
    title: string,
    price: number,
    description: string,
    images: string[],
    creationAt: string,
    updatedAt: string,
    category: Category
}

export interface Category {
    id: number,
    name: string,
    image: string,
    creationAt: string,
    updatedAt: string
}

export type Children = {
    children: ReactNode
}

export interface getStoreType {
    data: Products[] | undefined,
    isLoading: boolean
    isStale: boolean
    nextPage: () => void
    previousPage: () => void
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
}
