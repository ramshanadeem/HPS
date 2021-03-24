const express = require("express");
const User = require("../../models/User.js");
const router = express.Router();
var bcrypt = require('bcryptjs');
//const users = require('../../Users');
var jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

//===========================================Get all users
router.get("/", async (req, res) => {
    try {

        const users = await User.find();
        console.log(users);

        res.json({
            status: 200,
            success: true,
            data: users
        })
    } catch (e) {
        res.json({
            status: 404,
            success: false,
            error: e.message
        })
      
    }
});
//=========================================== Create Single User

router.post("/add", async (req, res) => {
    //console.log("....",req)
    let { pwd, email, name } = req.body;
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pwd, salt);
    console.log("hash=====", hash)
    let newUser = { pwd: hash, email, name }
    try {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    //// save
                    User.create(newUser)
                        .then(usr => res.json({
                            success: true,
                            dbid: usr._id,
                            status: 201
                        }))
                }//if

            })
            .catch(err => res.json({
                error: err,
                status: 404
            }))



    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, error: err.message });
    }

});

//===================================================================Get single user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({ success: true, data: user });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }


});
module.exports = router