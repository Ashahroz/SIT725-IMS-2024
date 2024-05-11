const bcrypt = require('bcrypt');

// Middleware function to hash the password from req.body.password
async function hashPassword(req, res, next) {
    try {
        // Extracting password from req.body
        const password = req.body.password;

        // Generating salt rounds (adjust the value as needed)
        const saltRounds = 10;

        // Hashing the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Replace the plaintext password with the hashed password in req.body
        req.body.password = hashedPassword;

        // Calling the next middleware or route handler
        next();
    } catch (error) {
        // Handling any errors that occur during hashing
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Middleware function to check password against hashed password
async function checkPassword(req, res, next) {
    try {
        // Extracting password from req.body
        const password = req.body.password;

        // Extracting hashed password from user data (assuming it's stored in req.user.password)
        const hashedPassword = req.user.password;

        // Comparing the password with the hashed password
        const passwordMatch = await bcrypt.compare(password, hashedPassword);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Handling any errors that occur during password comparison
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { hashPassword, checkPassword };
