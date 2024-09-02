const Blog = require('../models/blog-model'); 
const bcrypt = require('bcryptjs');

const createBlogPost = async (req, res) => {
    const { title, content, author, tags } = req.body;
    try {
        let blog = new Blog({ title, content, author, tags });
        await blog.save();
        res.status(201).json({ msg: 'Blog post created successfully', blog });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getBlogPosts = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getBlogPostById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ msg: 'Blog post not found' });
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const updateBlogPost = async (req, res) => {
    const { title, content, author, tags, isPublished } = req.body;
    try {
        let blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ msg: 'Blog post not found' });

        blog.title = title || blog.title;
        blog.content = content || blog.content;
        blog.author = author || blog.author;
        blog.tags = tags || blog.tags;
        blog.isPublished = isPublished !== undefined ? isPublished : blog.isPublished;
        blog.updatedAt = Date.now();

        await blog.save();
        res.status(200).json({ msg: 'Blog post updated successfully', blog });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const deleteBlogPost = async (req, res) => {
    try {
        let blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ msg: 'Blog post not found' });

        await blog.remove();
        res.status(200).json({ msg: 'Blog post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { createBlogPost, getBlogPosts, getBlogPostById, updateBlogPost, deleteBlogPost };
