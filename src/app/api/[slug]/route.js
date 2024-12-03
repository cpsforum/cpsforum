export async function GET(request, { params }) {
    const searchParams = request.nextUrl.searchParams
    const sort = searchParams.get('sort')
    let res
    try {
        res = await fetch(`https://cps-forum-api.azurewebsites.net/topicos/by-section?section=${params.slug}${sort ? `&sort=${sort}` : ''}`, {cache: "no-cache"})
            .then(res => res.json())
    } catch (error) {
        console.error('Error fetching topics:', error);
        return Response.json({ success: false, error: 'Failed to fetch topics' + error });
    }
    return Response.json({ success: true, topics: res.content })
}