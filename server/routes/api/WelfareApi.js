const express = require("express");
const router = express.Router();

const Welfaremodel = require("../../models/Welfaremodel.js");



router.post('/add', async (req, res) => {

    console.log(req.body)
    try {
        const Welfareuser = await Welfaremodel.create(req.body)

        res.json({
            success: true,
            status: 201,
            pid: Welfareuser._id
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
    const posts = await Welfaremodel.find();
    console.log(posts)
    res.json({
        success: true,
        status: 200, //ok
        data: posts
    })

})


module.exports = router;
