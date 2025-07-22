import mongoose from 'mongoose';

const initMongoConnection = async () => {
  try {
    const uri = process.env.DB_URI;
    if (!uri) {
      throw new Error('DB_URI is not defined in environment variables');
    }

    await mongoose.connect(uri);
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

export default initMongoConnection;
