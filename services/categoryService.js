const slugify = require('slugify');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/api_error');
const Category = require('../model/categoryModel');



//@desc Get All Categories
//@route GET /api/v1/categories
//@access Public
exports.getCategories = asyncHandler(async (req, res) => {
  const page =req.query.page * 1 || 1;
  const limit =req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
 const categories = await Category.find({}).skip(skip).limit(limit);
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
exports.getCategotyById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

    const category = await Category.findById(id);
    if(!category){
   return  next(new ApiError(`category not found with this id: ${id}`, 404));
    }
      res.status(200).json({
        data: category,
      });
    
  

});
//@desc Create Category
//@route POST /api/v1/categories
//@access Private
exports.createCategory =asyncHandler(async (req, res) => {

  const categories = await Category.create({
    name: req.body.name,
    slug: slugify(req.body.name),
  });
  res.status(201).json({
     data:categories,
},
);

},
);

//@desc Update Category
//@route PUT /api/v1/categories/:id
//@access Private
exports.updateCategory = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;

    const category = await Category.findOneAndUpdate({_id: id}, {
      name: name,
      slug: slugify(name),
    }, {new: true},);
    if(!category ){
       return  next(new ApiError(`category not found with this id: ${id}`, 404));

    }
      res.status(200).json({
        data: category,
      });
    
  
});

//@desc Delete Category
//@route DELETE /api/v1/categories/:id
//@access Private
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

    const category = await Category.findOneAndDelete({_id: id});
    if(!category){
      return  next(new ApiError(`category not found with this id: ${id}`, 404));
    }
      res.status(200).json(
        {
          message: `category deleted successfully`,          
        }
      );
     
});