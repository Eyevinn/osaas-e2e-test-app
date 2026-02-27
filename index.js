const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', app: 'osaas-e2e-test-app' }));
});

server.listen(PORT, () => {
  console.log(`E2E test app listening on port ${PORT}`);
});
