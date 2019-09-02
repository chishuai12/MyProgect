var express = require("express");
var app = express();
var formidable = require("formidable");
var fs = require("fs");

////当有人用get请求访问/的时候做的事情
app.get("/",function(req,res){
	res.send("首页");
});

//当有人用post请求访问/baocun的时候做的事情
app.post("/baocun",function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields) {
    	console.log(fields);
    	//写入文件,writeFile()表示覆盖文件，appendFile表示追加文件。
    	fs.appendFile("./public/dingcan.txt",JSON.stringify(fields),function(err){
    		if(err){
    			res.send("-1");
    		}else{
    			res.send("1");
    		}
    	});
    });
});

//将public文件夹静态化出来，此时里面的文件将自动拥有路由
app.use(express.static("public"));

app.listen(3000);
