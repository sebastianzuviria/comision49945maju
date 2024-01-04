import { useState, useEffect } from 'react'

export const useFetch = (url, config = {}, dependencies = []) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url, config)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, dependencies)

    return { data, error, loading }
}