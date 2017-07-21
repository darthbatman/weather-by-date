var request = require('request');

var getTemperatureForDate = function(month, day, year, callback){

	request("https://www.wunderground.com/history/airport/KJAN/" + year + "/" + month + "/" + day + "/DailyHistory.html?req_city=Jackson&req_statename=Mississippi", function(err, res, body){
	
		if (err) {
			callback(err);
		}
		else {

			var temperature = parseInt(body.split("wx-value\">")[1].split("</")[0]);

			callback(null, temperature);

		}

	});

};

module.exports = getTemperatureForDate;