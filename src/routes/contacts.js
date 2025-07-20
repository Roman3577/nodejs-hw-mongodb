import express from 'express';
import * as contactsController from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(contactsController.getAllContacts));
router.get('/:id', ctrlWrapper(contactsController.getContactById));
router.post('/', ctrlWrapper(contactsController.addContact));
router.put('/:id', ctrlWrapper(contactsController.updateContact));
router.delete('/:id', ctrlWrapper(contactsController.deleteContact));

export default router;
