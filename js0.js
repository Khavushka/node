// const http = require('http');
// const url = require('url');
// const { parse } = require('querystring');

// http.createServer( (request, response) => {
//     console.log('server work');
//      if(request.method == 'GET') {
//          //GET method
//     console.log(request.method); // request
//     let urlRequest = url.parse(request.url, true);
//     // console.log(urlRequest);
//     console.log(urlRequest.query.test);
//     if (urlRequest.query.test % 2 == 0) {
//         response.end('even');
//     }
//     response.end('odd');
// }
// else {
//     // POST method
//     let body = '';
//     request.on('data', chunk => {
//         body += chunk.toString();
//     });
//     request.on('end', () => {
//         console.log(body);
//         let params = parse(body);
//         console.log(params);
//         console.log(params.hi);
//         response.end('ok');
//     });
// }
// }).listen(3000);

const fs = require('fs');

//1 vej
fs.readFile('t1.txt', 'uft-8', (err, data) => {
    console.log(data);
});