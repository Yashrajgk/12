const express = require('express')
//router object
const router = express.Router()

const { getAllBlogsController, 
    createBlogController, 
    updateBlogController, 
    getBlogByIdController, 
    deleteBlogController,
    userBlogController,
    likedBlogController,
    commentBlogController,
 } = require('../controllers/blogController')



//router
//GET || all blogs
router.get('/all-blog', getAllBlogsController)

//POST || create blog
router.post('/create-blog', createBlogController)

//PUT || update blog
router.put('/update-blog/:id', updateBlogController)

//GET || Single Blog Details
router.get('/get-blog/:id', getBlogByIdController)

//DELETE || delete-blog
router.delete('/delete-blog/:id', deleteBlogController)
  
//GET || user blog
router.get("/user-blog/:id", userBlogController);

//POST || liked blog
router.post('/like-blog/:id', () => {return ;});

//POST || comment blog
router.post('/comment-blog/:id/:blogId', commentBlogController);  

module.exports = router;