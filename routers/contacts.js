import express from 'express';
import * as ctrl from '../controllers/contacts/index.js';
import ctrlWrapper from '../helpers/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAllContacts));
router.get('/:id', ctrlWrapper(ctrl.getContactById));
router.post('/', ctrlWrapper(ctrl.createContact));
router.put('/:id', ctrlWrapper(ctrl.updateContactById));
router.delete('/:id', ctrlWrapper(ctrl.deleteContactById));

export default router;
