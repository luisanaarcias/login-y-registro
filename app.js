require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');

(async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI_TEST);
        console.log('Conectado a mongoDB');
    } catch (error) {
        console.log(error)
    }
})()

//middleware
app.use(cors());
app.use(cookieParser())
app.use(express.json());

//Rutas Fronted
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/images', express.static(path.resolve('img')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));

app.use(morgan('tiny'));

//Rutas de backend
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

module.exports = app;