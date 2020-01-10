const fs = require('fs');
const file = "databaseQuotes.json" 

const readFile = fileName => {
    try {
      return JSON.parse(fs.readFileSync(fileName));
    } catch (error) {
      return [];
    }
  };
  
  const writeFile = (fileName, content) => {
    try {
      fs.writeFileSync(fileName, JSON.stringify(content));
      console.log("Cytat został usuniety");
    } catch (error) {
      console.log(error);
    }
  };

const remove = id => {
  let databaseQuotes = readFile(file);
  let index = id - 1;
  databaseQuotes.splice(index,1);
  writeFile(file, databaseQuotes)
}

module.exports = {
    command: 'remove <id>',
    desc: 'Usuń cytat podając jego id',
    handler: remove,
};