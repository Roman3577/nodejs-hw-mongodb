import * as contactsService from '../services/contacts.js';

export const getAllContacts = async (req, res) => {
  const contacts = await contactsService.listContacts();
  res.json({ status: 'success', message: 'Contacts found', data: contacts });
};

export const getContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await contactsService.getContactById(id);
  if (!contact) throw new Error('Contact not found');
  res.json({ status: 'success', message: 'Contact found', data: contact });
};

export const addContact = async (req, res) => {
  const contact = await contactsService.addContact(req.body);
  res.status(201).json({ status: 'success', message: 'Contact added', data: contact });
};

export const updateContact = async (req, res) => {
  const { id } = req.params;
  const contact = await contactsService.updateContact(id, req.body);
  if (!contact) throw new Error('Contact not found');
  res.json({ status: 'success', message: 'Contact updated', data: contact });
};

export const deleteContact = async (req, res) => {
  const { id } = req.params;
  const contact = await contactsService.removeContact(id);
  if (!contact) throw new Error('Contact not found');
  res.json({ status: 'success', message: 'Contact deleted', data: contact });
};
