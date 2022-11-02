const userModel = require("../models/userModel");

const register = async (req, res) => {
    const user = new userModel(req.body);
    try {
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }

};

exports.register = register;
