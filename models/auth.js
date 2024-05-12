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
async function isAuthenticated(req) {
    try {
        const { email, password } = req.body;
        console.log('Body:', req.body)
        const client = await connectDatabase();
        const user = await client.db('IMS').collection('admin').findOne({ email });
        if (!user || !password) {
            console.log('User not found or password not provided');
            return false;
        }
        const hashedInputPassword = await hashPassword(password);

        // Debugging
        console.log('Email:', email);
        console.log('User Password:', password);
        console.log('Hashed Password from DB:', user.password);
        console.log('Hashed User Input Password:', hashedInputPassword);

        const passwordMatch = await bcrypt.compare(password, user.password);

        return passwordMatch;
    } catch (error) {
        console.error('Error in isAuthenticated:', error);
        throw error;
    }
}

module.exports = { isAuthenticated };
