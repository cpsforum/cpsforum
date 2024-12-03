// Cache simples em memória
const topicCache = new Map();

export async function GET(request, { params }) {
  const cacheKey = `topic-${params.id}`;
  const ttl = 60 * 1000; // Tempo de vida do cache: 60 segundos

  try {
    // Verificar se o dado já está no cache e ainda é válido
    if (topicCache.has(cacheKey)) {
      const cachedData = topicCache.get(cacheKey);

      // Validar o tempo de expiração do cache
      if (Date.now() - cachedData.timestamp < ttl) {
        console.log('Cache hit:', cacheKey);
        return Response.json({ success: true, topic: cachedData.data });
      }

      // Cache expirado, removendo
      console.log('Cache expired:', cacheKey);
      topicCache.delete(cacheKey);
    }

    console.log('Cache miss:', cacheKey);

    // Fazer a requisição à API externa
    const res = await fetch(`https://cps-forum-api.azurewebsites.net/topicos/${params.id}`, {
      next: { revalidate: 60 }, // Opcional: controla o cache no lado do Next.js
    });

    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}`);
    }

    // Parse do JSON
    const topic = await res.json();

    // Salvar no cache com o timestamp atual
    topicCache.set(cacheKey, { data: topic, timestamp: Date.now() });

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
