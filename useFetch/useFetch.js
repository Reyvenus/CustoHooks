import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true)
    
    useEffect(() => {
                                        
        return () => {                  
            isMounted.current=false     
        }
    })

    const [value, setValue] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        setValue({
            data: null,
            loading: true,
            error: null
        })


        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                        setValue({
                            data: data,
                            loading: false,
                            error: null
                        })
                    
                }, 1000)
            })
    }, [url])

    return value
}