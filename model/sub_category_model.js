const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, "Sub Category name must be unique"],
      required: [true, "Sub Category name is required"],
      minlength: [2, "Sub Category name must be at least 3 characters"],
      maxlength: [32, "Sub Category name must be less than 32 characters"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Sub Category must belong to a category"],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("SubCategory", subCategorySchema);
