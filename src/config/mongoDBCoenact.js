// db.js
const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://exzobaidulkazi:8t%5Dei8jtA32_iND@cluster0.f143vc0.mongodb.net/zkapinewspaper';

const mongoURI = 'mongodb://localhost:27017/chatApp'
mongoose.set('strictQuery', true);
mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB success');
});

module.exports = db;
