import express from 'express';
import * as contactsController from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(contactsController.getAll));
router.get('/:id', ctrlWrapper(contactsController.getById));
router.post('/', ctrlWrapper(contactsController.create));
router.put('/:id', ctrlWrapper(contactsController.updateById));
router.delete('/:id', ctrlWrapper(contactsController.deleteById));

export default router;
