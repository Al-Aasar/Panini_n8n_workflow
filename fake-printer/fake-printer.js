const net = require('net');

net.createServer((socket) => {
  const chunks = [];
  socket.on('data', (d) => chunks.push(d));
  socket.on('end', () => {
    const data = Buffer.concat(chunks);
    console.log('\n===== وصل أوردر =====');
    console.log(data.toString('utf8').replace(/[\x00-\x08\x0B-\x1F]/g, ''));
    console.log('=====================\n');
  });
}).listen(9100, '0.0.0.0', () => console.log('الطابعة الوهمية شغالة على بورت 9100'));