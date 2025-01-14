const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');  // Update path if needed

// MongoDB connection URL
const dbURI = 'mongodb+srv://coder:coder121@blog-app.xrwagal.mongodb.net/hospital?retryWrites=true&w=majority';  // Update with your MongoDB URI

// Function to hash password
const hashPassword = async (password) => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);  // Hash the password with bcrypt
};

// Function to add a user
const addNewUser = async () => {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

    const newUser = {
        email: "testuser@example.com",
        password: "newpassword", // Plain password
        role: "manager"
    };

    try {
        // Hash the password manually
        const hashedPassword = await hashPassword(newUser.password);

        const createdUser = new User({
            email: newUser.email,
            password: hashedPassword, // Save the hashed password
            role: newUser.role
        });

        await createdUser.save();
        console.log('New user added successfully!');
    } catch (err) {
        console.error('Error adding user:', err);
    } finally {
        mongoose.connection.close();
    }
};

addNewUser();
