
const asyncHandler = require("express-async-handler");
const BlogService = require("../Services/BlogService");

const createBlog = asyncHandler(async (req, res) => {
  console.log(req.body);
    try {
        const blog = await BlogService.createBlog(req.body);

        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

async function getAllBlogs(req, res) {
  try {
      const blogs = await BlogService.getAllblogs();
      
      res.json(blogs);
  } catch (error) {
      res.status(404).json({ message: error.message }); // Adjust the status code as needed
  }
}

module.exports = {
    createBlog,getAllBlogs
};

