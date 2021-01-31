# csv-api

The base URL of the API is : ```http://localhost:40000/api/v1```

First of all, run this command : ```node src/utils/index.js```

This will : 
* Download de URL given CSV and write it in file called data.csv in "csv-directory".
* Sort the data.csv by zipcode in ascending order and write the results in "csv-directory/sortedZipAsc.csv".
* Sort the data.csv by town name in ascending order and write the results in "csv-directory/sortedTownAsc.csv".
* Sort the data.csv by zipcode and town name in ascending order and write the results in "csv-directory/sortedZipTownAsc.csv".

Second, to start the server, run the commande : ```npm start```

The following routes allow us to requestion ths api and get results in JSON:
* ```/town/zipcode-asc``` : zipcode in ascending order
* ```/town/name-asc``` : town name in ascending order
* ```/town/zipcode-and-name-asc``` : zipcode and town name in ascending order

Note: 
The pagination est very useful for improving rendering of a large JSON.
