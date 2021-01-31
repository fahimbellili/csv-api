const fs = require('fs').promises;
const parse = require('csv-parse/lib/sync');
const stringify = require('csv-stringify');

function csvWriter(data, filename) {
  stringify(data, {
    header: true,
    delimiter: ';'
}, function (err, output) {
    fs.writeFile(`./csv-directory/${filename}.csv`, output);
})
} 

module.exports = csvReader = async () => {
  try {
    const fileContent = await fs.readFile('./csv-directory/data.csv');
    const records = parse(fileContent, {delimiter: [';'], columns: true});

    const sortedZipAsc = await [...records].sort((a, b) => parseFloat(a.Code_postal) - parseFloat(b.Code_postal));
    csvWriter(sortedZipAsc, 'sortedZipAsc');
    
    const sortedTownAsc = await [...records].sort((a,b) => (a.Nom_commune > b.Nom_commune) ? 1 : ((b.Nom_commune > a.Nom_commune) ? -1 : 0))
    csvWriter(sortedTownAsc, 'sortedTownAsc');

    const sortedZipTownAsc = await [...records].sort(
      function(a, b) {          
         if (a.Nom_commune === b.Nom_commune) {
            return a.Code_postal - b.Code_postal;
         }
         return a.Nom_commune > b.Nom_commune ? 1 : -1;
      });
      csvWriter(sortedZipTownAsc, 'sortedZipTownAsc');
  
  } catch (error) {
    console.log(error);
  }
 
};

