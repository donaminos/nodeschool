var net = require('net');

var port = process.argv[2];

var format = function(val){
	if( val < 10)
		return "0" + val;
	else
		return val
} 

var server = net.createServer(function (socket){
	
	var date = new Date();
	var data = date.getFullYear();
    data += '-' + format( date.getMonth() + 1) ;     // starts at 0
    data += '-' + format( date.getDate() );      // returns the day of month
    data += ' ' + format(date.getHours());
    data += ':' + format(date.getMinutes());

	socket.end(data);
});

server.listen(port);