const mongoose = require('mongoose')
const heroSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    sub_title:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }
    
}, {
    timestamps: true
})


module.exports = mongoose.model("Hero", heroSchema)