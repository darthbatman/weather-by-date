var weatherByDate = require('../index.js');

weatherByDate(11, 3, 1997, function(temperature){
	console.log(temperature);
});