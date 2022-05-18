const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Welcome to Javascript webserver...');
});

server.listen(8081, () => {
  const { address, port } = server.address();
  console.log(`server is listening on: http://${address}:${port}`);
});