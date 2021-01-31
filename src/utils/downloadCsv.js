const fs = require('fs')  
const path = require('path')  
const axios = require('axios')

async function downloadCsv () {  
  const url = 'https://www.data.gouv.fr/fr/datasets/r/554590ab-ae62-40ac-8353-ee75162c05ee'
  const pathname = path.resolve('./csv-directory', 'data.csv')
  const writer = fs.createWriteStream(pathname)

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}

module.exports = downloadCsv;
