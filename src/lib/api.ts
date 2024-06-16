export const sendEmail = async (data: any) =>
    fetch('/api/', {
        method: 'POST',
        body: JSON.stringify(data),
    })