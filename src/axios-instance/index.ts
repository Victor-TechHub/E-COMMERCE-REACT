import Axios from "axios";
import { URL } from "./constants";
import { Category } from "../types";

const config = { baseURL: URL }
const axiosInstance = Axios.create(config)

export const getProducts = async () => {
    const response = await axiosInstance.get("/products")
    return response.data
}

export const getCategories = async (): Promise<Category[]> => {
    const response = await axiosInstance.get("/categories")
    return response.data
}