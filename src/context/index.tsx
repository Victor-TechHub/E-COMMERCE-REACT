import { createContext } from "react";
import { Children, Products } from "../types";
import { getStore } from "../hooks/getStore";

export const AppContext = createContext<AppContextType | null>(null)

type AppContextType = {
    allProducts: Products[]
}

const AppContextProvider = ({ children }: Children) => {
    const { data: allProducts } = getStore()

    return <AppContext.Provider value={{ allProducts }}> {children} </AppContext.Provider>
}

export default AppContextProvider