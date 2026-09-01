import { AngularAppEngine, createRequestHandler } from '@angular/ssr';


function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

const angularApp = new AngularAppEngine();


export const reqHandler = createRequestHandler(async (req: Request) => {
  const url = new URL(req.url);
  console.log(`Request URL: ${url.pathname}`);
  if (url.pathname === '/api/data') {
    return json({
      message: 'This is the root endpoint. You can define your API endpoints here.',
    });
  }

  const angularResponse: Response | null = await angularApp.handle(req);

  if (angularResponse) {
    return angularResponse;
  }

  return new Response('Not Found', { status: 404 });
});
