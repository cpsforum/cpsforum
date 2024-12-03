export async function GET(request, { params }){
    const req = await fetch(`https://cps-forum-api.azurewebsites.net/topicos/${params.id}`)
    const topic = await req.json()
    return Response.json({ success: true, topic })
}

export async function DELETE(request, { params }) {
    try{
    const req = await fetch(`https://cps-forum-api.azurewebsites.net/topicos/${params.id}`, {
        method: "DELETE",
    })
} catch (e) {
    console.error(e)
    return Response.json({status: 500, message: 'Failed to delete topic'})
}
    return Response.json({ success: true })
}