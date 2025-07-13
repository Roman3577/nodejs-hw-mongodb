import { getAllContacts, getContactById } from '../services/contacts.js';

export const getAll = async (req, res, next) => {
  try {
    const data = await getAllContacts();
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (err) {
    next(err);
  }
};
