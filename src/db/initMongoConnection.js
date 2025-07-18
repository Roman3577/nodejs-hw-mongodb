import mongoose from 'mongoose';

const initMongoConnection = async () => {
  const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;
  const URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URI);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Mongo connection error:', error);
    process.exit(1);
  }
};

export default initMongoConnection;
