import { useEffect, useState } from "react"

const breakPoint = 576
const detectDevice = () => {
     return window.innerWidth <= breakPoint ? "Light Mode For Mobile" : 'DESKTOP'
}
const useDetectDevice = () => {
    const [device, setDevice] = useState(() => detectDevice())

    useEffect(()=> { 
        const handleREsize = () => {
              setDevice(detectDevice())    
        }
    
        window.addEventListener('resize', handleREsize)
        return() => window.removeEventListener('resize', handleREsize)
    }, [])
     return device
}

export default useDetectDevice