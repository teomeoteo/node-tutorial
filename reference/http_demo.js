const http = require('http');

// Create Server object

http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
}).listen(5100, () => console.log('Server running'));