const mongoose = require('mongoose');
// 1- Create Schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category required'],
    unique: [true, 'Category must be unique'],
    minlength: [3, 'Category must be at least 3 characters'],
    maxlength: [32, 'Category must be less than 32 characters'],
  },
  slug: {
    type: String,
    lowercase: true,
  },
  image: String,

},{
  timeStamps: true,
},
);

// 2- Create model
const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;