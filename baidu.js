var http= require('http');
var baidu = http.createClient(80, 'www.baidu.com');
var request = baidu.request('GET', '/',
{'host': 'www.baidu.com'});
request.end();
request.on('response', function (response) {
console.log('STATUS: ' + response.statusCode);
console.log('HEADERS: ' + JSON.stringify(response.headers));
response.setEncoding('utf8');
response.on('data', function (chunk) {
console.log('BODY: ' + chunk);
});
});
