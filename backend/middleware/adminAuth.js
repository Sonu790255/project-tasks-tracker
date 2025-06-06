const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your-super-secret-jwt-key-2024';

const adminAuth = (req, res, next) => {
        try {
                // Get token from header
                const authHeader = req.header('Authorization');
                console.log('Auth Header:', authHeader);

                if (!authHeader) {
                        console.log('No Authorization header found');
                        return res.status(401).json({ message: 'No Authorization header found' });
                }

                const token = authHeader.replace('Bearer ', '');
                console.log('Token:', token);

                if (!token) {
                        console.log('No token provided');
                        return res.status(401).json({ message: 'No authentication token, access denied' });
                }

                try {
                        // Verify token
                        const decoded = jwt.verify(token, JWT_SECRET);
                        console.log('Decoded token:', decoded);

                        // Check if user is admin
                        if (!decoded.isAdmin) {
                                console.log('User is not admin');
                                return res.status(403).json({ message: 'Access denied. Admin privileges required.' });
                        }

                        // Add user info to request
                        req.user = decoded;
                        console.log('Authentication successful');
                        next();
                } catch (jwtError) {
                        console.error('JWT Verification Error:', jwtError.message);
                        return res.status(401).json({
                                message: 'Token is invalid or expired',
                                error: jwtError.message
                        });
                }
        } catch (error) {
                console.error('Auth Error:', error.message);
                res.status(401).json({
                        message: 'Authentication failed',
                        error: error.message
                });
        }
};

module.exports = adminAuth; 