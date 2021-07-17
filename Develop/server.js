// needed to use the libraries
const express = require('express');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// need this line to access the css files and 'static' files in the public folder
app.use(express.static('public'));

// put routes in separate files to make routing 'easier' in future iterations
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);



app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
  });

