const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const registerRoute = require('./route');



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', registerRoute);

mongoose.connect("mongodb+srv://sunny:test@cluster0.owpq5.mongodb.net/Test?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, function(err){
    if(err) return console.log(err);
    app.listen(3000, () => {
        console.log('listening on port 3000');
    });
});



module.exports = app;