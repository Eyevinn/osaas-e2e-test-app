const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.split('?')[0] === '/cacheable') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=60'
    });
    res.end('osaas-e2e-cacheable');
    return;
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', app: 'osaas-e2e-test-app' }));
});

server.listen(PORT, () => {
  console.log(`E2E test app listening on port ${PORT}`);
});
