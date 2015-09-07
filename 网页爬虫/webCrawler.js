var http = require('http');
var fs = require('fs');

http.get('http://www.baidu.com/', function (response) {
        var body = [];

        console.log(response.statusCode);
        console.log(response.headers);

        response.on('data', function (chunk) {
                body.push(chunk);
        });

        response.on('end', function () {
                body = Buffer.concat(body);
                //console.log(body.toString());
                fs.writeFile('index.html', body.toString(), function (err) {
                        if(err) throw err;
                        console.log('Data saved!');
                });
        });
});

