const express = require("express");
const router = express.Router();
const User = require("../models/user")

router.get("/", (req,res) => {
    User.find({}).then(data => res.send(data))
})

router.post("/", (req,res) => {
    User.create(req.body).then(data => res.send(data))
})

module.exports = router;