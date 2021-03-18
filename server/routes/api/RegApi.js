const express = require("express");
const router = express.Router();

const Regmodel = require("../../models/Regmodel.js");

//Get all users
/* router.get("/", async (req, res) => {
    try {

        const Regusers = await Regmodel.find();
        console.log(Regusers);
        res.status(200).json({ success: true, data: Regusers });
    } catch (e) {
        res.status(404).json({ success: false, error: err.message });
    }
}); */

router.post('/add', async (req, res) => {
    // const {title, description, author} = req.body
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

    // const newUser = new User(usr);
    // try {
    //   await newUser.save();
    //   res.status(201).json(usr);
    // } catch (e) {
    //   res.status(400).json({ message: "error in saving users" });
    // }
});

//Get single user
/* router.get('/:id', async (req, res) => {
    try {
        const userOne = await User.findById(req.params.id);
        res.status(200).json({ success: true, data: userOne });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }

   
}); */

module.exports = router;
