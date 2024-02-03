const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
    title:{
        type:String,
        require:[true,'title is required']
    },
    description:{
        type: String,
        required: [true, "description is reqired"],
    },
    image: {
        type: String,
        required: [true, "image is require"],
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        require: [true, "password is required"],
    },
    blogs:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Blog',
        }
    ]  
},
{ timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;


