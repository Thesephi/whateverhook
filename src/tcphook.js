// based example taken from https://nodejs.org/api/net.html#net_net_createserver_options_connectionlistener

const net = require('net');
const server = net.createServer((c) => {

  // 'connection' listener
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });

  // this writes back 'hello' to the client ONCE when the connection was initially
  // made
  c.write('hello\r\n');

  // this seems to write back to the client whatever was sent to the server
  // which we don't need in our case
  // c.pipe(c);

  c.on('data', (buf) => {
    const dataStr = buf.toString('utf8', 0, buf.length);
    console.log(dataStr);
  });

});

server.on('error', (err) => {
  throw err;
});

server.listen(process.env.PORT || 3002, () => {
  console.log('server bound');
});
