export async function POST(request) {
    const requestBody = await request.json()

    const res = await fetch('https://cps-forum-api.azurewebsites.net/topicos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
    
    if (res.ok) {
        return Response.json({ success: true })
    } else {
        return Response.json({ success: false })
    }
}