const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    console.log('Login attempt:', email); // Log the email received in the login request

    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Log the hashed password stored in the database and the plain password being entered
        console.log('Stored Hashed Password:', user.password);
        console.log('Entered Plain Password:', password);

        // Compare the entered password with the stored hash
        const passwordMatch = await user.matchPassword(password);
        console.log('Password Match Result:', passwordMatch);  // This should be true if the password matches

        if (!passwordMatch) {
            console.log('Password mismatch');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({ token, role: user.role });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'Server error' });
    }
};
