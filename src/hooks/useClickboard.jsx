import { useEffect, useState } from "react";

const useClickboard = () => {

    const [copy, setcopy] = useState(false)

    const makeCopy = (value) => {
        if(typeof value === "string" || typeof value === "number") {
            navigator.clipboard.writeText(value)
            setcopy(true)
        } else {
            console.log('invalid value')
            setcopy(false)
        }
    }

    useEffect(() => {
        let timeout
        if(copy) {
            setTimeout(() => setcopy(false), 3000)
        }

        return () => clearTimeout(timeout)
    }, [copy])

    return {makeCopy, copy}
}


export default useClickboard