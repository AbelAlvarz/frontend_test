export const getItem = (key: string) => {

    if (typeof window !== 'undefined') {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : null;
    }

}

export const setItem = (key: string, data: any) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(data));
    }
}