import dotenv from 'dotenv';
import initMongoConnection from './db/initMongoConnection.js';
import setupServer from './server.js';

dotenv.config();

const start = async () => {
  await initMongoConnection();
  setupServer();
};

start();
