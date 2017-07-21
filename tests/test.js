var weatherByDate = require('../index.js');

weatherByDate(11, 3, 1997, function(err, temperature){

	if (err) {
		console.log(err);
	}
	else {

		console.log(temperature);
		
	}

});