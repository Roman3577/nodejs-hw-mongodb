import express from 'express';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} from '../controllers/contacts.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await getAllContacts();
    res.status(result.status).json(result);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const result = await getContactById(req.params.id);
    res.status(result.status).json(result);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const result = await createContact(req.body);
    res.status(result.status).json(result);
  } catch (err) {
    next(err);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const result = await updateContact(req.params.id, req.body);
    res.status(result.status).json(result);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await deleteContact(req.params.id);
    res.status(result.status).json(result);
  } catch (err) {
    next(err);
  }
});

export default router;
