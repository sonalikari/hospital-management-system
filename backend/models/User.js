const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');  // Ensure bcrypt is installed

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['manager', 'pantry', 'delivery'], required: true },
}, { timestamps: true });

// Remove the pre-save hook

// Compare input password with stored hashed password
userSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
