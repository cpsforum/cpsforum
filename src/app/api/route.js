import { headers } from "next/headers";

export async function GET(request) {
    const headerList = await headers()
    const bearer = headerList.get('Bearer')
    const searchParams = request.nextUrl.searchParams
    const sort = searchParams.get('sort')
    let res
    try {
        res = await fetch(`https://cps-forum-api.azurewebsites.net/topicos${sort ? `?sort=${sort}` : ''}`)
            .then(res => res.json())
    } catch (error) {
        console.error('Error fetching topics:', error);
        return Response.json({ success: false, error: 'Failed to fetch topics' + error }, {headers: "Bearer: " + bearer});
    }
    return Response.json({ success: true, topics: res.content })
}