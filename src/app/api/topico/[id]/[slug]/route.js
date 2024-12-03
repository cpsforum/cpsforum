// Cache simples em memória
const topicCache = new Map();

export async function GET(request, { params }) {
  const cacheKey = `topic-${params.id}`;

  try {
    // Verificar se o tópico já está no cache
    if (topicCache.has(cacheKey)) {
      console.log('Cache hit:', cacheKey);
      return Response.json({ success: true, topic: topicCache.get(cacheKey) });
    }

    console.log('Cache miss:', cacheKey);

    // Fazer a requisição à API externa
    const res = await fetch(`https://cps-forum-api.azurewebsites.net/topicos/${params.id}`, {
      cache: 'no-cache', // Evita cache por padrão
    });

    // Verificar se a resposta é válida
    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}`);
    }

    // Parse do JSON da resposta
    const topic = await res.json();

    // Salvar no cache com um TTL de 1 minuto
    topicCache.set(cacheKey, topic);
    setTimeout(() => topicCache.delete(cacheKey), 60 * 1000); // Remove após 1 minuto

    // Retornar a resposta
    return Response.json({ success: true, topic });

  } catch (error) {
    console.error('Error fetching topic:', error.message);

    // Retornar erro como resposta JSON
    return Response.json(
      { success: false, error: error.message || 'Unexpected error' },
      { status: 500 }
    );
  }
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
