const BlogPostingData = require("./blogpost.model");

async function getPostedBlogDB() {
  try {
    const postedData = await BlogPostingData.find();
    return postedData;
  } catch (error) {
    console.error("Error fetching item size:", error);
  }
}

async function createBlogPostDB(postingData) {
  console.log(postingData);
  try {
    return await BlogPostingData.insertMany(postingData);
  } catch (error) {
    throw new Error("Error inserting items size: " + error.message);
  }
}

async function getBlogPostByIdDB(id) {
  try {
    const singlePost = await BlogPostingData.findById(id);
    console.log(singlePost);
    return singlePost;
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error from service");
  }
}

async function updateBlogPostDB(id, data) {
  try {
    const updatedPost = await BlogPostingData.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    if (updatedPost) {
      return updatedPost;
    } else {
      console.log("No matching document found for ID:", id);
      return null;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error from service");
  }
}

module.exports = {
  getPostedBlogDB,
  createBlogPostDB,
  getBlogPostByIdDB,
  updateBlogPostDB,
};
