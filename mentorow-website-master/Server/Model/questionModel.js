const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema({

    question: {
        type: String,
        required: true
    },
    answer: {
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


module.exports = mongoose.model("Question", questionSchema)