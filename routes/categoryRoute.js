const express = require('express');

const { getCategories,createCategory, getCategotyById } = require('../services/categoryService');

const router = express.Router();

router.route('/').get(getCategories).post(createCategory);
router.route('/:id').get(getCategotyById);

module.exports = router;