import express from 'express';
import {
  getContactsController,
  getContactByIdController,
  addContactController,
  removeContactController,
  updateContactController,
} from '../controllers/contacts.js';

const router = express.Router();

router.get('/', getContactsController);
router.get('/:id', getContactByIdController);
router.post('/', addContactController);
router.delete('/:id', removeContactController);
router.patch('/:id', updateContactController);

export default router;
