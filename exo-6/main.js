var filterByExtension = require('./filter_module.js');

var ext = process.argv[3];
var dirpath = process.argv[2];

filterByExtension(dirpath, ext, function(err,data){
	if(err){
		console.log('Error : ', err );
	}else{
		data.forEach(function(item){
			console.log(item);
		});
	}

});