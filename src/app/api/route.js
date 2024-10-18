export async function GET(request){
    const searchParams = request.nextUrl.searchParams
    const sort = searchParams.get('sort')
    const req = await fetch(`https://cps-forum-api.azurewebsites.net/topicos${sort ? `?sort=${sort}`:''}`, {cache: 'no-cache'})
    const res = await req.json()
    return Response.json({ success: true, topics: res.content })
}