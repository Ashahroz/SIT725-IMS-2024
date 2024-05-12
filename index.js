if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
app.use(express.urlencoded({ extended: true })); // Add this line to parse urlencoded form data
app.use(express.json());
const port = process.env.PORT || 3000; // Changed var to const for port

app.use(express.static('public'));
app.use('/', authRoutes);

// TODO: Implement SESSION


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
