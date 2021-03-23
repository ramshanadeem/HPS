const express = require("express");
const router = express.Router();

const Regmodel = require("../../models/Regmodel.js");



router.post('/add', async (req, res) => {

    console.log(req.body)
    try {
        const Reguser = await Regmodel.create(req.body)

        res.json({
            success: true,
            status: 201,
            pid: Reguser._id
        })

    } catch (error) {
        res.json({
            success: false,
            status: 400,
            error: error.message,
            status: 400,
            msg: 'Post is not created'
        })
    }


});
router.get('/', async (req, res) => {
    // get posts from posts
    const posts = await Regmodel.find();
    console.log(posts)
    res.json({
        success: true,
        status: 200, //ok
        data: posts
    })

})
router.delete('/:id', async (req, res) => {
    try {
         const post = await Register.findByIdAndDelete(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        msg: 'post is deleted successfully'
    })
    } catch (error) {
        console.log(error)
    }

})
router.post('update/:id', async (req, res) => {
    console.log('update')
    const post = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        success: true,
        status: 200, //ok
        data: post,
        msg: 'updated successfully'
    })


})


module.exports = router;
