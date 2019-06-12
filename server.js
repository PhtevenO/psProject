var http = require('http');
var fs = require('fs')
function onRequest(request, response){
console.log(request.url);
    switch(request.url){
        case '/index.html':
        console.log('nice');
        break;
    }
    response.writeHead(200, {'Content-type': 'text/html'});
    let readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    readStream.pipe(response);
    // response.end();
}

http.createServer(onRequest).listen(8080, ()=>{
    console.log('Node server working on 8080 port');
});