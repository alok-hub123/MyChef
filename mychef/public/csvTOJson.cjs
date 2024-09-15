const csv = require('csvtojson');
const fs = require('fs');

// File paths
const csvFilePath = 'Cleaned_Indian_Food_Dataset.csv'; // Path to your CSV file
const jsonFilePath = 'IndianFoodDataset.json'; // Path where JSON file will be saved

// Convert CSV to JSON
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // Writing to JSON file
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, 2), 'utf-8');
    console.log('CSV file has been successfully converted to JSON format.');
  })
  .catch((error) => {
    console.error('Error converting CSV to JSON:', error);
  });
