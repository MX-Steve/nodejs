const http = require('http');
let server = http.createServer((req,res)=>{
	res.write('hello');
	res.end('bye');
});
server.listen(3000);