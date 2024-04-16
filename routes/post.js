const { createPost, deletePost, getAllPost, getSinglePost, updatePost } = require("../controllers/posts.js");
const express = require('express')
const router = express.Router();

//create new post
router.route('/').get(getAllPost).post(createPost)
 
//get all
router.route('/').get(getAllPost)


//delete and update
router.route('/:id').get(getSinglePost).patch(updatePost).delete(deletePost)

//getOne
router.route('/:id').get(getSinglePost)

module.exports = router