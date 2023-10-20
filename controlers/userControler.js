const UserModel = require("../models/UserModel");


const addUser = async (req, res) => {
    let newUser = new UserModel(req.body);

    try {
        let savedUser = await newUser.save();
        res.send(savedUser);
    } catch (error) {
        res.status(415).send(error.message);
    }
};

module.exports = {addUser};
