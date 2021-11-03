let http = require("http");
let fs = require("fs");

let content;

fs.readFile("header.html", "UTF-8", function (err, data) {
    if(err) {
        console.log(err);
    } else {
        //console.log(data);
        content = data;
    }
});


http.createServer(function (req,res) {
    console.log("Server running........");

    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(content);
    res.setTimeout(100);

}).listen(80);

