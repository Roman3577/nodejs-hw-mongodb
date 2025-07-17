import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String,
    phoneNumber: { type: String, required: true },
    contactType: { type: String, enum: ['home', 'work', 'personal'], default: 'personal' },
    isFavourite: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
