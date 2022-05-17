const http = require('http');

const server = http.createServer((req, res) => {
  const fs = require('fs');
  // one way
  // const rs = fs.createReadStream('test.txt');
  // rs.on('data', (chunkdata) => {
  //   res.write(chunkdata);
  // });
  // rs.on('end', () => {
  //   res.end('data readed succesfully');
  // });
  // rs.on('error', (err) => {
  //   console.log(err);
  //   res.end('file not found');
  // });
  // other way
  const rs = fs.createReadStream('test.txt');
  rs.pipe(res);
});

server.listen(8000);
