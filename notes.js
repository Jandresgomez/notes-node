//Imported modules
const fs = require('fs');

//Main modules
const file = 'notes-db.json';

//Checking the notes file exists
try {
    var notesDB = fs.readFileSync(file);
} catch (err) {
    var notesDB = [];
    fs.writeFileSync(file, JSON.stringify(notesDB));
}

var addNote = (title, body) => {
    console.log('Adding note', title);
    var str = fs.readFileSync(file);
    var notesDB = JSON.parse(str);
    
    var note = {
        title: title,
        body: body
    }
    notesDB.push(note);

    fs.writeFileSync(file, JSON.stringify(notesDB));
};

var getAll = () => {
    console.log('Getting all notes');
    var str = fs.readFileSync(file);
    var notesDB = JSON.parse(str);
    return notesDB;
};

var getNote = (title) => {
    console.log('Getting the note', title);
    return '';
}

var removeNote = (title) => {
    console.log('Removing the note', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}