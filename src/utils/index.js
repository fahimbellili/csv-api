const downloadCsv = require('./downloadCsv');
const csvReader = require('./readSortWrite');

(async () => {
    try {
        await downloadCsv();
        await csvReader();
    } catch (error) {
        console.log(error);
    }
})()
