import mongoose from 'mongoose';

const initMongoConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connection successful');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

export default initMongoConnection;
