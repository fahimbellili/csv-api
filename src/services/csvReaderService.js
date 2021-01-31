const fs = require('fs').promises;
const parse = require('csv-parse/lib/sync');

async function reader(filename) {
    try {
        const fileContent = await fs.readFile(`./csv-directory/${filename}.csv`);
        const records = parse(fileContent, {delimiter: [';'], columns: true});
        return records;
    } catch (error) {
        console.log(error);
    }
}

exports.getByZipAscService = async () => {
    try {
        const csvByZip = await reader('sortedZipAsc');
        return csvByZip;
    } catch (error) {
        console.log(error);
    }
}

exports.getByTownAscService = async () => {
    try {
        const csvByTownAsc = await reader('sortedTownAsc');
        return csvByTownAsc;
    } catch (error) {
        console.log(error);
    }
}

exports.getByZipTownAscService = async () => {
    try {
        const csvByZipTownAsc = await reader('sortedZipTownAsc');
        return csvByZipTownAsc;
    } catch (error) {
        console.log(error);
    }
}
