import Contact from '../models/contact.js';

export const listContacts = async () => await Contact.find();
export const getContactById = async (id) => await Contact.findById(id);
export const addContact = async (data) => await Contact.create(data);
export const updateContact = async (id, data) => await Contact.findByIdAndUpdate(id, data, { new: true });
export const removeContact = async (id) => await Contact.findByIdAndDelete(id);
