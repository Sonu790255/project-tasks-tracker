const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-2024';

// Register new user
router.post('/register', async (req, res) => {
        try {
                const { username, email, password } = req.body;

                // Check if user already exists
                const existingUser = await User.findOne({ $or: [{ email }, { username }] });
                if (existingUser) {
                        return res.status(400).json({ message: 'User already exists' });
                }

                // Create new user
                const user = new User({
                        username,
                        email,
                        password
                });

                await user.save();

                // Generate token
                const token = jwt.sign(
                        { id: user._id, isAdmin: user.isAdmin },
                        JWT_SECRET,
                        { expiresIn: '24h' }
                );

                res.status(201).json({
                        message: 'User registered successfully',
                        token,
                        user: {
                                id: user._id,
                                username: user.username,
                                email: user.email,
                                isAdmin: user.isAdmin
                        }
                });
        } catch (error) {
                res.status(500).json({ message: error.message });
        }
});

// Login user
router.post('/login', async (req, res) => {
        try {
                const { email, password } = req.body;

                // Find user
                const user = await User.findOne({ email });
                if (!user) {
                        return res.status(401).json({ message: 'Invalid credentials' });
                }

                // Check password
                const isMatch = await user.comparePassword(password);
                if (!isMatch) {
                        return res.status(401).json({ message: 'Invalid credentials' });
                }

                // Generate token
                const token = jwt.sign(
                        { id: user._id, isAdmin: user.isAdmin },
                        JWT_SECRET,
                        { expiresIn: '24h' }
                );

                res.json({
                        message: 'Login successful',
                        token,
                        user: {
                                id: user._id,
                                username: user.username,
                                email: user.email,
                                isAdmin: user.isAdmin
                        }
                });
        } catch (error) {
                res.status(500).json({ message: error.message });
        }
});

module.exports = router; 