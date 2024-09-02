const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
    trim: true     
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    trim: true    
  },
  createdAt: {
    type: Date,
    default: Date.now 
  },
  updatedAt: {
    type: Date,
    default: Date.now, 
    index: true       
  },
  tags: {
    type: [String], 
    default: []    
  },
  isPublished: {
    type: Boolean,
    default: false 
  }
});

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog;
