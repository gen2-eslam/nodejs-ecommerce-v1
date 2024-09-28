const express = require("express");
const {
  getCategotyByIdValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
} = require("../utils/validator/category_validator");

const {
  getCategories,
  createCategory,
  getCategotyById,
  updateCategory,
  deleteCategory,
} = require("../services/categoryService");

const router = express.Router();

router
  .route("/")
  .get(getCategories)
  .post(createCategoryValidator, createCategory);
router
  .route("/:id")
  .get(getCategotyByIdValidator, getCategotyById)
  .put(updateCategoryValidator, updateCategory)
  .delete(deleteCategoryValidator, deleteCategory);

module.exports = router;
