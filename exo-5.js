var fs = require('fs');
var path = require('path');

var dirpath = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir( dirpath, function(err, fileNamesList ){

	if(err){
		console.log(err);
	}else{
		for( var i = 0; i < fileNamesList.length; i++ ){
			
			if( path.extname(fileNamesList[i]) == ext ){
				console.log( fileNamesList[i] );
			}
		} 
	}
});