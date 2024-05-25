const Blog = require('../Model/BlogModel');

const createBlog = async (blogData) => {
    const { title, image, description} = blogData;
    if (!title || !image || !description ) {
        throw new Error("All fields are mandatory");
    }
    const blog = await Blog.create({
        title,
        image,
        description
        
    });
    return blog;
};

const getAllblogs= async () =>{
try {
    
    const blogs = await Blog.find();
    return blogs
} catch (error) {
    throw new Error(error.message)
}

}

module.exports = {
    createBlog,
    getAllblogs
};

