import { useEffect, useState } from "react"

const useLocalStorage = (key, fallback) => {
    const [value, setValue] = useState(
JSON.parse(localStorage.getItem(key) ?? fallback)
    )

    useEffect (() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])
    return [value, setValue]
}

export default useLocalStorage