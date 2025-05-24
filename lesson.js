const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title: String,
  description: String,
  level: String, // e.g., nursery, secondary, university
  color: String,
});

module.exports = mongoose.model('Lesson', LessonSchema);
