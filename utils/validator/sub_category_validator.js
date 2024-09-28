const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validator_middleware");

exports.createSubCategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("subCategory name is required")
    .isLength({ min: 2, max: 32 })
    .withMessage("subCategory name must be between 3 to 32 characters"),
  check("category")
    .notEmpty()
    .isMongoId()
    .withMessage("Invalid category id format"),
  validatorMiddleware,
];

exports.getSubCategoriesvalidator = [
  check("id")
    .notEmpty()
    .isMongoId()
    .withMessage("Invalid category id format"),
  validatorMiddleware,
];
