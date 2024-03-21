const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category:{
        type:String,
        required:true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    disabled: {
        type: Boolean,
        default:false
    },
    status: {
        type: Boolean,
        default:true
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("Blog", blogSchema)