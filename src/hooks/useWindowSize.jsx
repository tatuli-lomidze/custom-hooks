import { useEffect, useState } from "react"

const useWindowResize = () => {
    const [width, setWidth] = useState(window.innerWidth)
    
 

useEffect(()=> {
    const handleREsize = () => {
        setWidth(window.innerWidth)

    }

    window.addEventListener('resize', handleREsize)
    return() => window.removeEventListener('resize', handleREsize)
}, [])

return {width}

}
export default useWindowResize