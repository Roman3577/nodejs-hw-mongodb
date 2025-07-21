import Student from '../models/contacts.js';

export const listContacts = () => Student.find();

export const getContactById = (id) => Student.findById(id);

export const addContact = (body) => Student.create(body);

export const updateContact = (id, body) =>
  Student.findByIdAndUpdate(id, body, { new: true });

export const removeContact = (id) => Student.findByIdAndDelete(id);
