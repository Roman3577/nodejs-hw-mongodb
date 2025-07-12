const fs = require('fs');
const mongoose = require('mongoose');

const uri =
  'mongodb+srv://mularr37:CMdSKNE1u9PnzF0o@cluster0.svxrrgi.mongodb.net/studentsDB?retryWrites=true&w=majority';

const studentSchema = new mongoose.Schema({}, { strict: false });
const Student = mongoose.model('Student', studentSchema, 'students');

async function importStudents() {
  try {
    await mongoose.connect(uri);
    const data = JSON.parse(fs.readFileSync('./students.json', 'utf8'));
    await Student.insertMany(data);
    console.log('✅ Дані успішно імпортовано до MongoDB!');
  } catch (err) {
    console.error('❌ Помилка імпорту:', err);
  } finally {
    mongoose.disconnect();
  }
}

importStudents();
