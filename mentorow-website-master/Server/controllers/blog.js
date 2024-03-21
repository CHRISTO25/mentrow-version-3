const Blog = require('../Model/blogModel');
const asyncHandler = require('express-async-handler')
const ErrorHandler = require('../utils/ErrorHandler');



//saving the blogs -http://localhost:7000/api/blog/addblog
const saveBlogs = asyncHandler(async (req, res, next) => {
    try {
        const { name, title, description, category } = req.body;
        const image = req.file
      
        if (!name || !title || !description || !category || !image) {
           return next(new ErrorHandler("Please enter all fields....."))
        }
        const categorys = await category.toLocaleLowerCase()
        const blogExist = await Blog.findOne({ title: title });
        console.log(blogExist, "blog exist");
        if (blogExist) {
           return next(new ErrorHandler("Blog already added....."))
        }
        const addBlog = await Blog.create({
            name: name,
            title: title,
            category: categorys,
            image: image.filename,
            description: description
        })
        if (addBlog) {
            res.status(200).json({
                _id: addBlog._id,
                name: addBlog.name,
                title: addBlog.title,
                categorys: addBlog.category,
                image: addBlog.image,
                description: addBlog.description
            })
        }
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while adding blog, controller-saveBlog", 500))
    }
})

//showing all blogs -http://localhost:7000/api/blog/blogs
const allBlogs = asyncHandler(async (req, res, next) => {
    try {
        const blogExist = await Blog.find();
        if (!blogExist) {
           return next(new ErrorHandler("No blogs to show....."))
        }
        res.json(blogExist)
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all blog, controller-allBLogs", 500))
    }
})


//update the blog -http://localhost:7000/api/blog/updateBlog
const updateBlogs = asyncHandler(async (req, res, next) => {
    try {
        console.log(req.body);
        const {id,title,description}= req.body
        console.log(title,description,id,"--------------");
        if (!id || !title || !description) {
            return next(new ErrorHandler("Didnt get all data to update"))
        }
        const blogExist = await Blog.findOne({_id:id});
        if (!blogExist) {
           return next(new ErrorHandler("No blogs to show....."))
        }
       const updatedBlog= await Blog.findByIdAndUpdate({ _id: id }, { $set: { title: title ,description:description } })
        if (!updatedBlog) {
            return next(new ErrorHandler("Updation Error"))
        }
        res.json(updatedBlog)
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all blog, controller-allBLogs", 500))
    }
})

//delete the blog -http://localhost:7000/api/blog/deleteBlog
const deleteBlogs = asyncHandler(async (req, res, next) => {
    try {
        const id = req.query.id
        const blogExist = await Blog.findOne({_id:id});
        if (!blogExist) {
           return next(new ErrorHandler("No blogs to show....."))
        }
        res.json(blogExist)
        await Blog.deleteOne({_id:id})
       
    } catch (error) {
        next(new ErrorHandler(error.message, "Error while showing all blog, controller-allBLogs", 500))
    }
})
module.exports = {
    saveBlogs,
    allBlogs,
    updateBlogs,
    deleteBlogs
}






