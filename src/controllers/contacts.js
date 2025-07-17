import createError from 'http-errors';
import ContactsService from '../services/contacts.js';

const contactsService = new ContactsService();

export const getAllContacts = async (req, res) => {
  const contacts = await contactsService.getAll();
  res.json({ status: 200, data: contacts });
};

export const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsService.getById(contactId);
  if (!contact) {
    throw createError(404, 'Contact not found');
  }
  res.json({ status: 200, data: contact });
};

export const createContact = async (req, res) => {
  const newContact = await contactsService.create(req.body);
  res.status(201).json({ status: 201, message: 'Successfully created a contact!', data: newContact });
};

export const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await contactsService.update(contactId, req.body);
  if (!updatedContact) {
    throw createError(404, 'Contact not found');
  }
  res.json({ status: 200, message: 'Successfully patched a contact!', data: updatedContact });
};

export const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const deleted = await contactsService.delete(contactId);
  if (!deleted) {
    throw createError(404, 'Contact not found');
  }
  res.status(204).send();
};
