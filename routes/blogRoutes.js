const express = require('express');
const { createBlogPost, getBlogPosts, getBlogPostById, updateBlogPost, deleteBlogPost } = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');
const blogRouter = express.Router();

blogRouter.post('/add', authMiddleware, createBlogPost);

blogRouter.get('/get', authMiddleware, getBlogPosts);

blogRouter.get('/:id', authMiddleware, getBlogPostById);

blogRouter.put('/:id', authMiddleware, updateBlogPost);

blogRouter.delete('/:id', authMiddleware, deleteBlogPost);

module.exports = blogRouter;
