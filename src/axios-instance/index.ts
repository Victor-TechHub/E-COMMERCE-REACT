import Axios from "axios";
import { URL } from "./constants";
import { Products } from "../types";

const config = { baseURL: URL }
const axiosInstance = Axios.create(config)

export const getProducts = async (): Promise<Products[]> => {
    const response = await axiosInstance.get("/products")
    return response.data
}
