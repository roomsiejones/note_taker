// needed to use the libraries
const express = require('express');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const path = require('path');
// need this line to access the css files and 'static' files in the public folder
app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')))

// app.get('/api/notes', (req, res) => res.json(noteData));

// app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
  });

