if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const urlencodedToJSON = require('./middlewares/urlencodedToJSON');
const { isAuthenticated } = require('./middlewares/auth');

app.use(express.json());
app.use(urlencodedToJSON); // Include the middleware for parsing URL-encoded data
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('login.ejs', { messages: { error: '' } });
});

app.post('/login', isAuthenticated, (req, res) => {
    res.redirect('/home');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
