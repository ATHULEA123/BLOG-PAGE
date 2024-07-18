const Blog = require('../Model/BlogModel');

/**
 * @param blogData 
 * @returns <Blog>
 */
const createBlog = async (blogData) => {
    const { title, image, description} = blogData;
    if (!title || !image || !description ) {
        throw new Error("All fields are mandatory");
    }
    return await Blog.create({
        title,
        image,
        description
        
    });
};

const getAllblogs= async () =>{
try {
    
    const blogs = await Blog.find().sort({createdAt:-1});
    return blogs
} catch (error) {
    throw new Error(error.message)
}

}

module.exports = {
    createBlog,
    getAllblogs
};

