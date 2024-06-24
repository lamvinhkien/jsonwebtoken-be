import userService from "../service/userService.js";

const handleHelloWorld = (req, res) => {
    return res.render("home")
}

const handleUserPage = async (req, res) => {
    let userList = await userService.getUserList();
    if (!userList) {
        return res.render("404")
    } else {
        return res.render("user", { userList })
    }
}

const handleCreateNewUser = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    await userService.createNewUser(email, password, username);
    return res.redirect("/user");
}

const handleDeleteUser = async (req, res) => {
    let id = req.params.id
    await userService.deleteUser(id);
    return res.redirect("/user")
}

const getUpdateUserPage = async (req, res) => {
    let id = req.params.id
    let userData = await userService.getUserById(id);

    return res.render("user-update", { userData })
}

const handleUpdateUser = async (req, res) => {
    let email = req.body.email
    let username = req.body.username
    let id = req.body.id

    await userService.updateUserInfor(email, username, id)
    return res.redirect("/user")
}

module.exports = {
    handleHelloWorld,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
    getUpdateUserPage,
    handleUpdateUser
}