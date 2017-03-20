var http=require('http')
var querystring=require('querystring')
var postData=querystring.stringify({
	'content':'一起期待下一期的课程,haha',
	'cid':8837
})
var options={
	hostname:'www.imooc.com',
	port:80,
	path:'/cource/document',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
'Accept-Encoding':'gzip, deflate',
'Accept-Language':'zh-CN,zh;q=0.8',
'Connection':'keep-alive',
'Content-Length':postData.length,
'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
'Cookie':'imooc_uuid=86aee05f-311a-49d2-8993-e94c3eb0836a;'+
 'imooc_isnew_ct=1481939685; loginstate=1;'+ 
 'apsid=JlMDk3NGRlNDU1NjYzNmQ0NmUwM2RkMDgxNmEzN2YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+
 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTc2NTA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz'+
 'OTIyNDE4NjhAcXEuY29tAAAAAAAAAAAAAAAAAAAAADBmMDM5MGI1NmQ0MTExOGUyOGViNzlmN2'+
 'IxNjlhMGM5PZ3MWD2dzFg%3DNG; last_login_username=392241868%40qq.com;'+
  'PHPSESSID=deg5iseu0mku5odkfde6q7mfm2; IMCDNS=0;'+
   'Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1489501212,1489563030,1489804439,1489807714;'+
    'Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1489807722; imooc_isnew=2; cvde=58cca9d85026a-12',
'Host':'www.imooc.com',
'Origin':'http://www.imooc.com',
'Referer':'http://www.imooc.com/video/8837',
'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.104 Safari/537.36 Core/1.53.2372.400 QQBrowser/9.5.10548.400',
'X-Requested-With':'XMLHttpRequest'
	}
}

var req=http.request(options,function(res){
	console.log("Status:"+res.statusCode)
	console.log("headers:"+JSON.stringify(res.headers))
	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})
	res.on("end",function(){
		console.log('评论完毕！')
	})
})
req.on("error",function(e){
	console.log("error:"+e.message)
})
req.write(postData)
req.end();