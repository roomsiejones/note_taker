let noteData = require('../db/db.json');

module.exports = (app) => {
    

    app.get('/api/notes', (req, res) => res.json(noteData));

    // stores the data in the json and assigns id's based on where it is in the file
    app.post('/api/notes', (req, res) => {
        noteData.push({...req.body, id: noteData.length});
        res.json(true);
    });
   


}