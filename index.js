const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  /* if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  } */

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    let extension = path.extname(filePath);
    let contentType = 'text/html';
    switch(extension) {
      case '.html' :
        contentType = 'text/html';
        break;
      case '.css' :
        contentType = 'text/css';
        break;
      case '.js' :
        contentType = 'application/json';
        break;
      case '.png' :
        contentType = 'image/png';
        break;
      case '.jpg' :
        contentType = 'image/jpg';
        break;
    }

    fs.readFile(filePath, (err,content) => {
      if(err) {
        if(err.code == 'ENOENT') {
          fs.readFile(path.join(__dirname, 'public', 'error-page.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
          })
        }
        else {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      }
      else {
        // Successful response
        res.writeHead(200, {'Content-Type': contentType});
        res.end(content, 'utf8');
      }
    })
    console.log(filePath);
});

const PORT = process.env.PORT || 5100;

server.listen(PORT, () => console.log(`Server running on: ${PORT}`));