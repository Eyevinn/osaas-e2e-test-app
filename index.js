const http = require('http');
const Database = require('better-sqlite3');

const PORT = process.env.PORT || 8080;

// Opens an in-memory DB and runs a trivial query at startup. If the native
// binding failed to compile (missing node-gyp toolchain on the runner image),
// require('better-sqlite3') above throws synchronously and the process exits
// non-zero before ever reaching listen() — surfacing as a runtime failure.
const db = new Database(':memory:');
const row = db.prepare('SELECT 1 AS ok').get();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`sqlite-ok:${row.ok}`);
});

server.listen(PORT, () => {
  console.log(`E2E native-sqlite test app listening on port ${PORT}`);
});
