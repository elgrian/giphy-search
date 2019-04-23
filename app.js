// app.js
// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// Routes
app.get('hello-world', (req, res) => {
    res.send('Hello Word');
});

// Start Server
app.listen(3000, () => {
    console.log('Gif Search listening on port localhost:3000!');
});