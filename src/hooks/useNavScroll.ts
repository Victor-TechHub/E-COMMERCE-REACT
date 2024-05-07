import { useEffect, useState } from "react"

export const useNavScroll = () => {
    const [scroll, setScroll] = useState<number>(0)

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [scroll])

    return { scroll }
}