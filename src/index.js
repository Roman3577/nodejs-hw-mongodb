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

// Тестовий базовий роут для перевірки на Render
app.get('/', (req, res) => {
  res.send('Hello from Render! Server is working.');
});

// Використовуємо роут без /api згідно вимог
app.use('/contacts', contactsRouter);

// Обробка 404
app.use(notFoundHandler);

// Глобальна обробка помилок
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await initMongoConnection();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

start();
