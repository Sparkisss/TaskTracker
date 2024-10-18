export const processData = <T>(data: T, setData: React.Dispatch<React.SetStateAction<T>>) => {
    if (Array.isArray(data) && data.length > 0) {                
        setData(data[0])
    } else if (typeof data === 'object' && data !== null) {                
        setData(data)
    } else {
        console.log('Неожиданный формат данных:', data)
    }
} 