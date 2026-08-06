// here we define the base URL for our API requests. 
// It will use the environment variable VITE_API_URL 
// if it's defined, otherwise it will default to 'http://localhost:8000/api'.

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

async function apiRequest(endpoint, options = {}) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`,{
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    })

    if (!response.ok){
        throw new Error(
            `API request failes with status: ${response.status} ${response.statusText}`
        )
    }

    return response.json()
}

export { API_BASE_URL, apiRequest}