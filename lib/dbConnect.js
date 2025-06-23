const mongoose = require('mongoose');

MONGODB_URI = process.env.MONGO_URI;

mongoose.connect(MONGODB_URI, {
dbName: 'finly-db',
bufferCommands: true,
});


console.log('Connected to MongoDB');