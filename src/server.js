import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import contactsRouter from './routes/contacts.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// ❗ правильний префікс — без "/api"
app.use('/contacts', contactsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
