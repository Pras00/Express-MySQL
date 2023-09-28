require('dotenv').config()
const express = require('express');
const cors = require('cors')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 4000;

// Routes
const usersRoutes = require('./routes/user.js');

// Middleware
const middlewareLogRequest = require('./middleware/log.js');

// Middleware
app.use(middlewareLogRequest);
app.use(express.json()); //mengizinkan request body berupa json
app.use(express.static('public'));
app.use(cors());

// Routes
app.use('/user', usersRoutes)

// Route Index
app.use('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
// Route Login
app.use('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'))
});
// Route Admin
app.use('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/admin-dashboard.html'))
});
// Route User
app.use('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'))
});

// Route link google
app.use('/google', (req, res) => {
    const externalURL = 'https://www.google.com'; // URL Google
    res.redirect(externalURL);
});


// Server listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});