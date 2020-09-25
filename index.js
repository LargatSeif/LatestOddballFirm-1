const convCsvToXlsx = require('@aternus/csv-to-xlsx');
const fs = require('fs');

const path = require('path');
const convertCsvToXlsx = require('@aternus/csv-to-xlsx');

let source = path.join(__dirname, 'data.csv');
let destination = path.join(__dirname, 'converted_report.xlsx');

try {
  convertCsvToXlsx(source, destination);
} catch (e) {
  console.error(e.toString());
}