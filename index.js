const convCsvToXlsx = require('@aternus/csv-to-xlsx');
const fs = require('fs');


fs.readFile('data.csv', 'utf8', function(err, data) {
	console.log(data)
	try {
		convCsvToXlsx('./data.csv', './data.xlsx');
	} catch (e) {
		console.error(e.toString());
	}
	// console.log(dataArray);
});
