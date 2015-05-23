var fs = require('fs');

var filepath = process.argv[2];

fs.readFile(filepath, function(error, data){

	if(error){
		console.log(error)
	}
	else {
		var str = data.toString();
		var arr = str.split('\n'); 
		console.log( arr.length - 1);
	}
		
});