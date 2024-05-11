const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const connectDatabase = require('./db'); // Import your MongoDB connection module

// Function to hash a password
async function hashPassword(password) {
    try {
        // Generating salt rounds (adjust the value as needed)
        const saltRounds = 10;

        // Hashing the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        return hashedPassword;
    } catch (error) {
        throw error; // Throw error for handling in calling function
    }
}

// Middleware function to authenticate user
async function isAuthenticated(req, res, next) {
    try {
        const { email, password } = req.body;
        const client = await connectDatabase();
        const user = await client.db('IMS').collection('admin').findOne({ email });

        if (!user || !password) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const hashedInputPassword = await hashPassword(password);

        // Debugging
        console.log('Email:', email);
        console.log('User Password:', password);
        console.log('Hashed Password from DB:', user.password);
        console.log('Hashed User Input Password:', hashedInputPassword);

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            next();
        } else {
            res.status(401).json({ error: 'Unauthorized' });
        }
    } catch (error) {
        console.error('Error in isAuthenticated middleware:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { isAuthenticated };
