var request = require('request');

var getTemperatureForDate = function(month, day, year, callback){

	request("https://www.wunderground.com/history/airport/KJAN/" + year + "/" + month + "/" + day + "/DailyHistory.html?req_city=Jackson&req_statename=Mississippi", function(err, res, body){
	
		var temperature = parseInt(body.split("wx-value\">")[1].split("</")[0]);

		callback(temperature);

	});

};

module.exports = getTemperatureForDate;