const express = require("express");
const router = express.Router();
const BlogPostController=require('./blogpost.controller');

router.get('/',BlogPostController.getPoestedBlogController);
router.get('/:id',BlogPostController.getBlogPostIdController);
router.post('/',BlogPostController.createBlogPostController);
router.put('/:id',BlogPostController.updateBlogPostController)

module.exports=router