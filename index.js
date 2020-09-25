
const xl = require('excel4node');
const csvFilePath = './data1.csv'
const csv = require('csvtojson');
const headers_E = [
		'STATUT',
		'FOURNISSEUR',
		'FACTURE F',
		'FACTURE ENGIE',
		'HT',
		'TTC',
		'DVS',
		'EMISSION',
		'ECHEANCE',
		'COMMANDE',
		'ENTITE',
		'AFFAIRE',
		'RA']
csv({
	delimiter:';',
	headers:headers_E
})
	.fromFile(csvFilePath)
	.then((jsonObj) => {

		// console.log(jsonObj);
		const wb = new xl.Workbook();
    	const ws = wb.addWorksheet('dev_ENGIE');
		const headingColumnNames = headers_E;

		let rowIndex = 2;
		let headingColumnIndex = 1;
		headingColumnNames.forEach(heading => {
			ws.cell(1, headingColumnIndex++)
				.string(heading)
		});
		jsonObj.forEach( record => {
			let columnIndex = 1;
			Object.keys(record ).forEach(columnName =>{
				if(columnName == 'HT'){
					ws.cell(rowIndex,columnIndex++)
					.string(String(record[columnName]));
				}else{
					ws.cell(rowIndex,columnIndex++)
					.string(record[columnName]);
				}
				
			});
			rowIndex++;
    	});
		wb.write('xxx.xlsx');
	});