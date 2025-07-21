import Contact from '../models/contact.js';

export const listContacts = () => Contact.find();

export const getContactById = (id) => Contact.findById(id);

export const addContact = (body) => Contact.create(body);

export const updateContact = (id, body) =>
  Contact.findByIdAndUpdate(id, body, { new: true });

export const removeContact = (id) => Contact.findByIdAndDelete(id);
