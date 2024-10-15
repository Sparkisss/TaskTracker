import { PrioritiesState } from '../types/types'

export const getData = async () => {
    try {
        const response = await fetch('http://localhost:5000/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'max-age=3000'
            }
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()

    } catch (error) {
        console.log(error)
    }
}

export const putData = async (data: PrioritiesState) => {
    try {
        const response = await fetch('http://localhost:5000/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }                
    } catch (error) {
        console.log(error)
    }
}