import Contact from '../models/contact.js';

export const getAllContacts = async () => {
  const data = await Contact.find();
  return { status: 200, message: 'Contacts retrieved', data };
};

export const getContactById = async (id) => {
  const data = await Contact.findById(id);
  if (!data) {
    const error = new Error('Contact not found');
    error.status = 404;
    throw error;
  }
  return { status: 200, message: 'Contact found', data };
};

export const createContact = async (body) => {
  const data = await Contact.create(body);
  return { status: 201, message: 'Contact created', data };
};

export const updateContact = async (id, body) => {
  const data = await Contact.findByIdAndUpdate(id, body, { new: true });
  if (!data) {
    const error = new Error('Contact not found');
    error.status = 404;
    throw error;
  }
  return { status: 200, message: 'Contact updated', data };
};

export const deleteContact = async (id) => {
  const data = await Contact.findByIdAndDelete(id);
  if (!data) {
    const error = new Error('Contact not found');
    error.status = 404;
    throw error;
  }
  return { status: 200, message: 'Contact deleted', data };
};
