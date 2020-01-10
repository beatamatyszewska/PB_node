const fs = require('fs');
const file = "databaseQuotes.json"

const readFile = fileName => {
    try {
      return JSON.parse(fs.readFileSync(fileName));
    } catch (error) {
      return [];
    }
  };  

const randomPrint = () => {
    let databaseQuotes = readFile(file);
    const randomArrIndex = Math.floor(Math.random() * databaseQuotes.length);
    console.log(randomArrIndex);
    let randomQuote = databaseQuotes[randomArrIndex];
    console.log(randomQuote);
}

module.exports = {
    command: 'random',
    desc: 'Wyświetl losowy cytat',
    handler: randomPrint,
};