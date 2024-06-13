const BlogPostingService=require('./blogpost.service')


const getPoestedBlogController = async (req, res, next) => {
    const data = req.body;
    const postedData = await BlogPostingService.getPostedBlogDB(data);
    res.json(postedData );
  };

const createBlogPostController=async(req, res,next) => {
    try {
        const data = req.body;
        console.log('data',data)
        const postingData= await BlogPostingService.createBlogPostDB(data);
        res.status(200).json({
            status: 'success',
            data: postingData
        });
    } catch (error) {
            res.status(500).json({
                status: 'error',
                message: 'Failed to save data to the database'
            });
    }
};

const getBlogPostIdController = async (req, res) => {
    const { id } = req.params;
    try {
      const singlePost = await BlogPostingService.getBlogPostByIdDB(id);
      if (!singlePost ) {
        return res.status(404).json({ message: "Menu not found" });
      }
      return res.status(200).json(singlePost );
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  const updateBlogPostController = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const updatedPost = req.body; // Assuming the updated data is sent in the request body
      console.log("updatedPost", updatedPost);
      const result = await BlogPostingService.updateBlogPostDB(
        id,
        updatedPost
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

module.exports={
    getPoestedBlogController,
    createBlogPostController,
    getBlogPostIdController,
    updateBlogPostController
}