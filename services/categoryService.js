const slugify = require('slugify');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const CategoryModel = require('../model/categoryModel');



//@desc Get All Categories
//@route GET /api/v1/categories
//@access Public
exports.getCategories = asyncHandler(async (req, res) => {
  const page =req.query.page * 1 || 1;
  const limit =req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
 const categories = await CategoryModel.find({}).skip(skip).limit(limit);
 res.status(200).json({
  result: categories.length,
   data: categories,
   meta: {
     page,
     limit,
   }
 });
})

//@desc Get soacifc category by id
// @route GET  /api/v1/categories/:id
// @access Public
exports.getCategotyById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({
      message: `category not found with this id: ${id}`,
    });
  }else {
    const category = await CategoryModel.findById(id);
    if(!category ){
      res.status(404).json({
        message: `category not found with this id: ${id}`,
      });
    }
      res.status(200).json({
        data: category,
      });
    
  }

});
//@desc Create Category
//@route POST /api/v1/categories
//@access Private
exports.createCategory =asyncHandler(async (req, res) => {

  const categories = await CategoryModel.create({
    name: req.body.name,
    slug: slugify(req.body.name),
  });
  res.status(201).json({
     data:categories,
},
);

},
);
