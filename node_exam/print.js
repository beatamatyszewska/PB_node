const fs = require('fs');
const file = "databaseQuotes.json"

const readFile = fileName => {
    try {
      return JSON.parse(fs.readFileSync(fileName));
    } catch (error) {
      return [];
    }
  };  

const print = () => {
    let databaseQuotes = readFile(file);
    console.log(databaseQuotes);
}

module.exports = {
    command: 'print',
    desc: 'Wyświetl bazę z cytatami',
    handler: print,
};