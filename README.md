# weather-by-date
Node.js API to retrieve average temperature for given date.

[![https://nodei.co/npm/weather-by-date.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/weather-by-date.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/weather-by-date)

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/darthbatman/weather-by-date)


# install

```
npm install weather-by-date
```

# example

```js
weatherByDate(11, 3, 1997, function(err, temperature){

	if (err) {
		console.log(err);
	}
	else {

		console.log(temperature);
		
	}

});
```

# api

### getTemperatureForDate(month, day, year, callback)

Type: `function`

```month``` number

```day``` number

```year``` number

```callback``` function

Returns average temperature for given date. 

### temperature

Type: `number`

Average temperature for given date.

# license

MIT © [Rishi Masand](https://github.com/darthbatman)