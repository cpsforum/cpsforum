export async function POST(request) {
    const requestBody = await request.json()

    try {
        const res = await fetch('https://cps-forum-api.azurewebsites.net/topicos', {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
        if (!res.ok) {
            throw new Error(`API responded with status ${res.status}. Error: ${await res.text()}`)
        }
        return Response.json({ success: true, topic: await res.json() })
    }
    catch (error) {
        console.error('Error creating topic:', error)
        return Response.json({ success: false, error: 'Failed to create topic' + error })
    }
}