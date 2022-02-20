const express = require('express');

const app = express();
var PORT = process.env.PORT || 3001;

// body parse

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes
require('./routes/app')(app);
require('./routes/notes')(app);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
