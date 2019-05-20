//ダウンロード
download(
    "https://www.aozora.gr.jp/index_pages/person81.html",
    "miyazawakenji.html",
    function(){
        console.log("ok, kenji.");
    }
);
download(
    "https://www.aozora.gr.jp/index_pages/person148.html",
    "natsumesoseki.html",
    function(){
        console.log("ok, soseki.");
    }
);

//urlを savepasth にダウンロードする関数
function download(url, savepath, callback) {
    var http = require('https');
    var fs = require('fs');
    var outfile = fs.createWriteStream(savepath);
    var req = http.get(url, function(res) {
        res.pipe(outfile);
        res.on('end', function () {
            outfile.close ();
            callback();
        });
    });
}