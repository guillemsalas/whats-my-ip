const http = require('http');

const PORT = process.env.PORT || 3000

http.createServer((req, res) => {
  res.writeHead(200);
  res.end(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
}).listen(PORT);
console.log(`whats-my-ip service running on port ${PORT}`)