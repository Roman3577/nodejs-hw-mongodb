import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String, required: true },
    favorite: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);


const Student = mongoose.model('Student', studentSchema);

export default Student;
