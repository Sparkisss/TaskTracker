export const getData = async (path: string) => {
    try {
        const response = await fetch(path, {
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

export const putData = async <T>(data: T, path: string, wrapData: boolean = false, wrapKey: string = 'data') => {
    try {
        const body = wrapData ? JSON.stringify({ [wrapKey]: data }) : JSON.stringify(data);
        const response = await fetch(path, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: body
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        throw error;
    }
}
