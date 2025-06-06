const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true,
                trim: true
        },
        description: {
                type: String,
                trim: true
        },
        startDate: {
                type: Date,
                required: true
        },
        endDate: {
                type: Date
        },
        status: {
                type: String,
                enum: ['pending', 'in-progress', 'completed'],
                default: 'pending'
        }
}, {
        timestamps: true
});

module.exports = mongoose.model('Project', projectSchema); 