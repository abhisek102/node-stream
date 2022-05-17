const http = require('http');

const server = http.createServer((req, res) => {
  const fs = require('fs');
  const rs = fs.createReadStream('test.txt');
  rs.on('data', (chunkdata) => {
    res.write(chunkdata);
  });
  rs.on('end', () => {
    res.end('data readed succesfully');
  });
  rs.on('error', (err) => {
    console.log(err);
    res.end('file not found');
  });
});

server.listen(8000);
