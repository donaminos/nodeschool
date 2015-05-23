var http = require('http');
var bl = require('bl');

var urls = []
var result = []
var callbacksCount = 0;

var showResult = function(callbacksCount, result){
	if(callbacksCount === 3){
		result.forEach(function (r, i){
			console.log(r);
		});
	}
};

urls[0] = process.argv[2];
urls[1] = process.argv[3];
urls[2] = process.argv[4];

urls.forEach(function (url, index){

	http.get(urls[index], function (response){
		response.pipe( bl(function (err, data){
			if(err)
				console.error(err);

			result[index] = data.toString();	
			callbacksCount ++;
			showResult(callbacksCount, result);
		}));
	});

});









