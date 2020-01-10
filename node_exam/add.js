const fs = require('fs');
const file = "databaseQuotes.json" //nazwa pliku bazą

const readFile = fileName => {
    try {
      return JSON.parse(fs.readFileSync(fileName));
    } catch (error) {
      return []; // jeśli plik jest pusty, to tworzymy pustą tablicę
    }
  };
  
const writeFile = (fileName, content) => {
    try {
      fs.writeFileSync(fileName, JSON.stringify(content));
      console.log("Cytat został dodany do bazy");
    } catch (error) {
      console.log(error);
    }
};

const addQuote = (quote, author, id) => {
  let databaseQuotes = readFile(file)
  id = databaseQuotes.length + 1; 
  databaseQuotes.push({quote, author, id})
  writeFile(file, databaseQuotes)
}

module.exports = {
    command: 'add <quote>, <author>',
    desc: 'Dodaj cytat wraz autorem do bazy',
    handler: addQuote,
};