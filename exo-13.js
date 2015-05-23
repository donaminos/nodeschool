var http 	= require('http');
var url		= require('url');
var port 	= process.argv[2];

var parsetime = function (date){
	return { "hour": date.getHours(), 
			 "minute": date.getMinutes(), 
			 "second": date.getSeconds()
			};
};

var unixtime = function(date){
	return { "unixtime": date.getTime() };
};

http.createServer( function (request, response) {
	
	var parsed 	= url.parse(request.url, true) ;
	var param 	= new Date(parsed.query.iso);
	var result;
	
	if( param == '')
		return console.error('No param error');

	switch(parsed.pathname){
		case '/api/parsetime':
			result = parsetime(param);
	   	break;
		case '/api/unixtime':
			result = unixtime(param);
		break;
	}

	if(result){
 		response.writeHead(200, { 'Content-Type': 'application/json' });
 		response.end(JSON.stringify(result));
	}else{
		response.writeHead(404, { 'Content-Type': 'application/json' });
 		response.end();
	}

}).listen(port);