import Contact from '../models/contact.js';

class ContactsService {
  async getAll() {
    return Contact.find();
  }

  async getById(id) {
    return Contact.findById(id);
  }

  async create(data) {
    return Contact.create(data);
  }

  async update(id, data) {
    return Contact.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    const result = await Contact.findByIdAndDelete(id);
    return result !== null;
  }
}

export default ContactsService;
