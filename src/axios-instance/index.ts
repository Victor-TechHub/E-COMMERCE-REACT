import Axios from "axios";
import { URL } from "./constants";
import { Products } from "../types";

const config = { baseURL: URL }
const axiosInstance = Axios.create(config)

export const getProducts = async (page: number): Promise<Products[]> => {
    const response = await axiosInstance.get(`/products?offset=${page}&limit=12`)
    return response.data
}

export const getSingleProduct = async (id: string | undefined): Promise<Products> => {
    const response = await axiosInstance.get(`/products/${id}`)
    return response.data
}