
const iconv = require('iconv-lite');
const fs = require('fs');
const csvFilePath = './data1.csv'
const csv = require('csvtojson');
const utf8 = require('utf8');
let Blob = require ('cross-blob')
let ch = 'Bloquée'

console.log("######", Buffer.from(iconv.encode(ch,'utf8'))) ;
 
const data_brut = `STATUT;FOURNISSEUR;FACTURE F;FACTURE ENGIE;HT;TTC;DVS;EMISSION;ECHEANCE;COMMANDE;ENTITE;AFFAIRE;RA;
En cours de traitement;TOTAL MARKETING FRANCE;F0900005;9000662075;17278,94;20734,72;EUR;31/01/2020;10/07/2020;;INEO;SSA140337; 
En litige;TOTAL MARKETING FRANCE;F0900005;9000662075;17278,94;20734,72;EUR;31/01/2020;10/07/2020;;INEO;SSA140337;
Bloquée;EG RETAIL (FRANCE);98556132;9000000002;295,12;354,15;EUR;03/02/2020;03/02/2020;Zheyun GU;INEO;SSA124838;Zhéyun GU;
En cours de traitement;ACCES INDUSTRIE;F19N2049;5120102747;411,9;494,28;EUR;29-11-2019;28-01-2020;;INEO LOGISTIQUE;SLG3C2322;`;

function transformToXls(content){
	return new Promise ((resolve,reject) => {
		content = content.replace(/;/g,'\t');
		// console.log(content)
		resolve(content);
	});
}
// 



/*
let decodedFile = iconv.decode(data_brut, 'iso88591');

if(decodedFile.indexOf('é') < 0) { 
	console.log('mac')
	decodedFile = iconv.decode(data_brut, 'macintosh'); 
}

*/
var blob = new Blob(["\ufeff"+data_brut], {
    type: 'text/csv; charset=utf-8'
});
transformToXls("\ufeff"+data_brut).then((data)=>{
	
	fs.writeFileSync('le_bon_encodage.xls',data,'utf8');
	console.log(data)
})
 
/*
*/
		/*
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
					ws.cell(rowIndex,columnIndex++).
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
	*/