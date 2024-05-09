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
}

// export interface Products {
//     product_id: number
//     name: string
//     description: string
//     price: number
//     unit: string
//     image: string
//     discount: number
//     availability: boolean
//     brand: string
//     rating: number
//     category: string
//     review: Reviews[]
// }

// export interface Reviews {
//     user_id: number
//     rating: number
//     comment: string
// }