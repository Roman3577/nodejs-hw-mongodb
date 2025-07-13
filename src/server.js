import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { getAll, getById } from './controllers/contacts.js';

const setupServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(pino());

  app.get('/contacts', getAll);
  app.get('/contacts/:contactId', getById);


  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.use((err, req, res, next) => {
    console.error('Error handler:', err);
    res.status(500).json({ message: err.message || 'Internal Server Error' });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  return app;
};

export default setupServer;
