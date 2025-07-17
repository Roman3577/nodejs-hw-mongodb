import Contact from '../../models/contact.js';
import HttpError from '../../helpers/HttpError.js';

export const getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) throw HttpError(404, 'Contact not found');
  res.status(200).json(contact);
};

export const createContact = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

export const updateContactById = async (req, res) => {
  const { id } = req.params;
  const updated = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!updated) throw HttpError(404, 'Contact not found');
  res.status(200).json(updated);
};

export const deleteContactById = async (req, res) => {
  const { id } = req.params;
  const deleted = await Contact.findByIdAndDelete(id);
  if (!deleted) throw HttpError(404, 'Contact not found');
  res.status(200).json({ message: 'Contact deleted' });
};
