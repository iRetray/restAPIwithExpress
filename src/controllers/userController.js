const userController = {};
const UserModel = require('../models/userModel')

userController.getUsers = async function(request, response){
    const users = await UserModel.find();
    response.json(users);
}

userController.insertUser = async function(request, response){ 
    const { id, username, password } = request.body;
    const newUser = new Usuario({
        id: id,
        username: username,
        password: password
    })
    await newUser.save();
    response.json({user: "usuario metido en DB"})
 }

userController.getUser = function(request, response){ response.json({ users: "one user" }) }

userController.deleteUser = function(request, response){ response.json({ users: "delete one user" }) }

userController.updateUser = function(request, response){ response.json({ users: "update a user" }) }

module.exports = userController;
