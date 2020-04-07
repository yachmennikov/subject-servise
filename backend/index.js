const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const articlesRoutes = require('./articles-routes');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/articles', articlesRoutes)

app.listen(4002)
mongoose.connect('mongodb://localhost:27017/articles?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
