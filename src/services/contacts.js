import { Contact } from '../models/contact.js';

export const getAllContacts = async () => {
  return await Contact.find();
};

export const getContactById = async (id) => {
  return await Contact.findById(id);
};

export const addContact = async (data) => {
  return await Contact.create(data);
};

export const removeContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};

export const updateContact = async (id, data) => {
  return await Contact.findByIdAndUpdate(id, data, { new: true });
};
