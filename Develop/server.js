// needed to use the libraries
const express = require('express');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3000
// ASK tutor what this does exactly, Jung told us to use this, but...
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const path = require('path');

app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
  });