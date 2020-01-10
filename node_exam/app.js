const addCommand = require('./add');
const printCommand = require('./print');
const randomCommand = require('./random');
const removeCommand = require('./remove');

require('yargs')
    .command(addCommand)
    .command(printCommand)
    .command(randomCommand)    
    .command(removeCommand)
    .demandCommand(1, 'Musisz podać przynajmniej jedno polecenie')
    .help()
    .argv