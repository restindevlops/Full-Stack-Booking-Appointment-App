
const express = require('express');

const sequelize= require('./util/database');

const cors = require('cors');

const app = express();
app.use(cors());

const userRoutes = require('./routes/user');

app.use(express.json());

app.use('/user', userRoutes);

sequelize.sync()
.then(app.listen(3000))
.catch(err=> console.log(err));