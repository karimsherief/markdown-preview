import { useEffect, useState } from "react"

export default function useLocalStorage<T>(key: string, intialValue: T | (() => T)) {
    const [value, setValue] = useState(() => {
        const json = localStorage.getItem(key)
        if (json != null) {
            return JSON.parse(json)
        }
        if (typeof intialValue === 'function') {
            return (intialValue as () => T)
        }
        return intialValue
    })

    useEffect(() => { localStorage.setItem(key, JSON.stringify(value)) }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}
