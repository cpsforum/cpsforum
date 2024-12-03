const cache = new Map(); // Cache in-memory
const requestTracker = new Map(); // Rastreamento básico para rate limiting

export async function GET(request) {
  const ip = request.headers.get('x-forwarded-for') || request.socket.remoteAddress;
  const searchParams = request.nextUrl.searchParams;
  const sort = searchParams.get('sort') || '';
  const cacheKey = `topics-${sort}`;
  const ttl = 60 * 1000; // Cache por 60 segundos
  const rateLimitWindow = 10 * 1000; // Limite de requisições: 10 segundos
  const rateLimitRequests = 5; // Limita 5 requisições por IP

  try {
    // Verificação de rate limiting
    const now = Date.now();
    if (!requestTracker.has(ip)) {
      requestTracker.set(ip, []);
    }

    const timestamps = requestTracker.get(ip).filter((timestamp) => now - timestamp < rateLimitWindow);
    if (timestamps.length >= rateLimitRequests) {
      return new Response(
        JSON.stringify({ success: false, error: 'Too many requests. Please try again later.' }),
        { status: 429 }
      );
    }

    timestamps.push(now);
    requestTracker.set(ip, timestamps);

    // Verifica se há dados no cache
    if (cache.has(cacheKey)) {
      const cachedData = cache.get(cacheKey);
      if (now - cachedData.timestamp < ttl) {
        console.log('Cache hit:', cacheKey);
        return new Response(JSON.stringify({ success: true, topics: cachedData.data }));
      }
      // Remove o cache expirado
      cache.delete(cacheKey);
    }

    console.log('Cache miss, fetching:', cacheKey);

    // Realiza a requisição à API externa
    const res = await fetch(`https://cps-forum-api.azurewebsites.net/topicos${sort ? `?sort=${sort}` : ''}`);

    if (!res.ok) {
      throw new Error(`API responded with status ${res.status}`);
    }

    const data = await res.json();

    // Armazena os dados no cache
    cache.set(cacheKey, { timestamp: now, data: data.content });

    return new Response(JSON.stringify({ success: true, topics: data.content }));
  } catch (error) {
    console.error('Error fetching topics:', error);

    // Responde com erro
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Unexpected error occurred.' }),
      { status: 500 }
    );
  }
}
