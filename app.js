const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database-connection.js');
const authRoutes = require('./routes/authRoutes');
const blogRouter =  require('./routes/blogRoutes');


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/blog', blogRouter);

module.exports = app;
