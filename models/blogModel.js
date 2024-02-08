const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "title is required"],
        },
        description: {
            type: String,
            required: [true, "description is require"],
        },
        image: {
            type: String,
            required: [true, "image is require"],
        },
        like: {
           type: Number,
           default: 0,
        },
        comments: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
                content: String,
            },
        ], 
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",  
            require: [true, "user id is required"],
        },
    },
    { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;