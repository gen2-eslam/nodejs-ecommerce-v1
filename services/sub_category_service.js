const slugify = require("slugify");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/api_error");
const SubCategory = require("../model/sub_category_model");

//@desc Create SubCategory
//@route POST /api/v1/categories
//@access Private
exports.createSubCategory = asyncHandler(async (req, res) => {
  const { name, category } = req.body;
  const subCategories = await SubCategory.create({
    name: name,
    category: category,
    slug: slugify(name),
  });
  res.status(201).json({
    data: subCategories,
  });
});

exports.getSubCategories = asyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  const subCategories = await SubCategory.find({}).skip(skip).limit(limit);
  res.status(200).json({
    result: subCategories.length,
    data: subCategories,
    meta: {
      page,
      limit,
    },
  });
});
