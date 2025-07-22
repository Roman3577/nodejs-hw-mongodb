import createHttpError from 'http-errors';
import {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} from '../services/contacts.js';

export const getContactsController = async (req, res, next) => {
  try {
    const contacts = await getAllContacts();
    res.json({ status: 200, data: contacts });
  } catch (error) {
    next(error);
  }
};

export const getContactByIdController = async (req, res, next) => {
  try {
    const contact = await getContactById(req.params.id);
    if (!contact) {
      throw createHttpError(404, 'Contact not found');
    }
    res.json({ status: 200, data: contact });
  } catch (error) {
    next(error);
  }
};

export const addContactController = async (req, res, next) => {
  try {
    const contact = await addContact(req.body);
    res.status(201).json({ status: 201, data: contact });
  } catch (error) {
    next(error);
  }
};

export const removeContactController = async (req, res, next) => {
  try {
    const contact = await removeContact(req.params.id);
    if (!contact) {
      throw createHttpError(404, 'Contact not found');
    }
    res.json({ status: 200, data: contact });
  } catch (error) {
    next(error);
  }
};

export const updateContactController = async (req, res, next) => {
  try {
    const contact = await updateContact(req.params.id, req.body);
    if (!contact) {
      throw createHttpError(404, 'Contact not found');
    }
    res.json({ status: 200, data: contact });
  } catch (error) {
    next(error);
  }
};
