var url ="https://kujirahand.com";
var savepath = "test.html";

var http = require('https');
var fs = require('fs');
console.log("test");
var outfile = fs.createWriteStream(savepath);
var callback = function(res){
    res.pipe(outfile);
    res.on('end',function(){
        outfile.close();
        console.log("ok");
    });
};
http.get(url, callback);