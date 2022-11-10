    const mongoose = require('mongoose');

    //para conectarnos o crear la BD
    mongoose.connect('mongodb://localhost/restfulldb', { useNewUrlParser: true });

    module.exports = mongoose;