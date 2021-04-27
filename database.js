const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kleberbs:leales1205@cluster0.mhmyy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));