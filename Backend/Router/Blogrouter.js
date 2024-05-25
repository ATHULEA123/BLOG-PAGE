const express = require('express');
const router = express.Router();
const { createBlog,getAllBlogs } = require('../Controller/Blogcontroller');

router.route("/blogs").post(createBlog);
router.route("/blogs").get(getAllBlogs)


module.exports = router;

