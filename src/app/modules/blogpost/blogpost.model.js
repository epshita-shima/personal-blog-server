const mongoose = require("mongoose");

const blogPOstSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  makeBy: { type: String, required: true },
  updateBy: { type: String },
  makeDate: { type: String, required: true },
  updateDate: { type: String },
});

const BlogPostModel = mongoose.model("bloginfo", blogPOstSchema);
module.exports = BlogPostModel;
