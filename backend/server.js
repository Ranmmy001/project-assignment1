const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.end(JSON.stringify({
    message: 'Backend is running',
    dbHost: process.env.MONGO_HOST,
    dbUser: process.env.MONGO_USERNAME
  }));
});

server.listen(port, () => console.log('Listening on port ' + port));

