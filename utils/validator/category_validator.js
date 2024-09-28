const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validator_middleware");

exports.getCategotyByIdValidator = [
  check("id").isMongoId().withMessage("Invalid category id format"),
  validatorMiddleware,
];
exports.createCategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("category name is required")
    .isLength({ min: 3, max: 32 })
    .withMessage("category name must be between 3 to 32 characters"),
  validatorMiddleware,
];
exports.updateCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid category id format"),

  validatorMiddleware,
];
exports.deleteCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid category id format"),

  validatorMiddleware,
];
