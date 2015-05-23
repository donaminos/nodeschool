var fs = require('fs');
var path = require('path');

var filterByExtension = function(dirPath, extension, callback){
	
	fs.readdir(dirPath, function(err, fileNameList){
		
		if(err)	
			return callback(err);
		
		var filteredList = fileNameList.filter(function(element){
			return path.extname(element) === '.' + extension
		});

		/*fileNameList.forEach(function(element, index){

			if( path.extname(element) === '.' + extension )
				filteredList.push(element);	
		});*/

		callback(null, filteredList);
	});
	
}

module.exports = filterByExtension;