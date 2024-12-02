export async function GET(request, { params }) {
    const res = await fetch(`https://cps-forum-api.azurewebsites.net/topicos/${params.id}`, {
      next: { revalidate: 60 }, // Cacheia por 60 segundos
    });
  
    if (!res.ok) {
      return Response.json({ success: false, error: 'Failed to fetch data' }, { status: res.status });
    }
  
    const topic = await res.json();
    return Response.json({ success: true, topic });
  }
  