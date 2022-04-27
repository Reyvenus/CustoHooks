import { useState } from "react"


export const useCounter = (initialCounter = 1) => {

    const [counter, setCounter] = useState(initialCounter)

    const incrementador = () => {
        setCounter(counter + 1)
    }

    const decrementador = () => {
        if (counter <= 0) {                
            setCounter(initialCounter)
        }
        else setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(initialCounter)
    }

    return {
        counter,
        incrementador,
        decrementador,
        reset
    }
}
