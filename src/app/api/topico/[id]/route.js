export async function GET(request, { params }){
    const req = await fetch(`https://cps-forum-api.azurewebsites.net/topicos/${params.id}`, {cache: 'no-cache'})
    const topic = await req.json()
    return Response.json({ success: true, topic })
}