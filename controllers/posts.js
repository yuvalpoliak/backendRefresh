const Post = require('../models/Post')

 const createPost  = async (req, res) => {
    
    try {
        const newPost = await Post.create(req.body);
        res.status(200).json({newPost})
    } catch (err) {
        res.status(400).send(err)
    }

}

 const updatePost = async (req, res) => {
    try {
        const {id: postId} = req.params
        const updatedPost = Post.findByIdAndUpdate({_id: postId}, req.body)
        res.status(200).json({updatedPost})
    } catch(err) {
        res.status(400).send(err)
    }
}

 const deletePost = async (req, res) => {
    try {
        const {id: postId} = req.params
        const updatedPost = Post.findByIdAndDelete({_id: postId}, req.body)
        res.status(200).json({updatedPost})
    } catch(err) {
        res.status(400).send(err)
    }
}

 const getAllPost = async (req, res) => {
    try{
    const allPost = await Post.find({})
    res.status(200).json({allPost})
    } catch(err) {res.status(400).send(err)}
}

 const getSinglePost = async (req, res) => {
    try{
    const {id: postId} = req.params
    const singlePost = await Post.findOne({_id: postId})
    res.status(200).json({singlePost})
    } catch(err) {res.status(400).send(err)}
}

module.exports = {getSinglePost, getAllPost, deletePost, updatePost, createPost}