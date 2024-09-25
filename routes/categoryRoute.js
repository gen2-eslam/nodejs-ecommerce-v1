const express = require('express');

const { getCategories,createCategory, getCategotyById,updateCategory,deleteCategory } = require('../services/categoryService');

const router = express.Router();

router.route('/').get(getCategories).post(createCategory);
router.route('/:id').get(getCategotyById).put(updateCategory).delete(deleteCategory);

module.exports = router;