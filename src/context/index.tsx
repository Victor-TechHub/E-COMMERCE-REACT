import { createContext } from "react";
import { Children, Products } from "../types";
import { getStore } from "../hooks/getStore";

export const AppContext = createContext<AppContextType | null>({
    data: undefined
})

type AppContextType = {
    data: Products[] | undefined
}

const AppContextProvider = ({ children }: Children) => {
    const { data: Data } = getStore()

    const value = {
        data: Data
    }

    return <AppContext.Provider value={value}> {children} </AppContext.Provider>
}

export default AppContextProvider