import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';
import contactsRouter from './routes/contacts.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';
import initMongoConnection from './db/initMongoConnection.js';

dotenv.config();
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/contacts', contactsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const start = async () => {
  await initMongoConnection();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

start();
