const express = require("express");
const { createSubCategory,getSubCategories } = require("../services/sub_category_service");

const {
  createSubCategoryValidator,
  getSubCategoriesvalidator,

} = require("../utils/validator/sub_category_validator");

const router = express.Router();

router.route("/").post(createSubCategoryValidator, createSubCategory);
router.route("/:id").get(getSubCategoriesvalidator, getSubCategories);

module.exports = router;
