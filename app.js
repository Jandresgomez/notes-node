//Imported modules
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

//Main modules
const notes = require('./notes');

const argv = yargs.argv;

var command = argv._[0];
if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    var notesDB = notes.getAll();
    console.log('All notes', notesDB);
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    console.log(note);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('invalid command');
}