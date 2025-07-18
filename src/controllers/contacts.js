import * as contactsService from '../services/contacts.js';

export const getAll = async (req, res) => {
  const contacts = await contactsService.listContacts();
  res.json({ status: 'success', code: 200, data: contacts });
};

export const getById = async (req, res) => {
  const { id } = req.params;
  const contact = await contactsService.getContactById(id);
  if (!contact) {
    return res.status(404).json({ status: 'error', code: 404, message: 'Not found' });
  }
  res.json({ status: 'success', code: 200, data: contact });
};

export const create = async (req, res) => {
  const newContact = await contactsService.addContact(req.body);
  res.status(201).json({ status: 'success', code: 201, data: newContact });
};

export const updateById = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await contactsService.updateContact(id, req.body);
  if (!updatedContact) {
    return res.status(404).json({ status: 'error', code: 404, message: 'Not found' });
  }
  res.json({ status: 'success', code: 200, data: updatedContact });
};

export const deleteById = async (req, res) => {
  const { id } = req.params;
  const deleted = await contactsService.removeContact(id);
  if (!deleted) {
    return res.status(404).json({ status: 'error', code: 404, message: 'Not found' });
  }
  res.json({ status: 'success', code: 200, message: 'Contact deleted' });
};
