const express = require('express')
const store = require('../middlewares/multer')
const {
    saveBlogs,
    allBlogs,
    updateBlogs,
    deleteBlogs } = require('../controllers/blog')

const router = express.Router()
router.post('/addBlog', store.single('image'), saveBlogs)
router.get('/blogs', allBlogs)
router.post('/updateBlog', updateBlogs)
router.post('/deleteBlog',deleteBlogs)
module.exports = router
