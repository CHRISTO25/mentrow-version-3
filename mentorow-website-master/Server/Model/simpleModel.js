const mongoose = require('mongoose')
const simpleSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    sub_heading: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status:{
        type:Boolean,
        default:true
    }
    
}, {
    timestamps: true
})


module.exports = mongoose.model("Simple", simpleSchema)