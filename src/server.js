const express = require('express');
const cors = require('cors');
const pino = require('pino-http')();
const contactsController = require('./controllers/contacts');

function setupServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(pino);

  app.get('/contacts', contactsController.getAll);
  app.get('/contacts/:contactId', contactsController.getById);

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  return app;
}

module.exports = setupServer;
