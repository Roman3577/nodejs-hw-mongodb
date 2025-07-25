require('dotenv').config();

const mongoose = require('mongoose');

async function initMongoConnection() {
  const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_URL,
    MONGODB_DB,
  } = process.env;

  const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri);
    console.log('Mongo connection successfully established!');
  } catch (err) {
    console.error('Mongo connection error:', err);
    process.exit(1);
  }
}

module.exports = initMongoConnection;
