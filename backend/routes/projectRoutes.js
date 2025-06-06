const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects
router.get('/', async (req, res) => {
        try {
                const projects = await Project.find().sort({ createdAt: -1 });
                res.json(projects);
        } catch (error) {
                res.status(500).json({ message: error.message });
        }
});

// Create new project
router.post('/', async (req, res) => {
        try {
                const project = new Project(req.body);
                const newProject = await project.save();
                res.status(201).json(newProject);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
});

// Update project
router.put('/:id', async (req, res) => {
        try {
                const project = await Project.findById(req.params.id);
                if (!project) {
                        return res.status(404).json({ message: 'Project not found' });
                }

                Object.assign(project, req.body);
                const updatedProject = await project.save();
                res.json(updatedProject);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
});

// Delete project
router.delete('/:id', async (req, res) => {
        try {
                const project = await Project.findById(req.params.id);
                if (!project) {
                        return res.status(404).json({ message: 'Project not found' });
                }

                await project.deleteOne();
                res.json({ message: 'Project deleted successfully' });
        } catch (error) {
                res.status(500).json({ message: error.message });
        }
});

module.exports = router; 