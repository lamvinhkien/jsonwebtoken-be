import mysql from 'mysql2/promise';
import bluebird from 'bluebird';
import bcrypt from 'bcryptjs';
import db from '../models/index'

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    let hashPassword = hashUserPassword(password)

    await db.User.create({
        email: email,
        password: hashPassword,
        username: username
    })

}

const deleteUser = async (id) => {
    await db.User.destroy({
        where: { id: id }
    })

}

const getUserById = async (id) => {
    let user = {}
    user = await db.User.findOne({ where: { id: id } })
    return user;
}

const updateUserInfor = async (email, username, id) => {
    await db.User.update(
        { email: email, username: username },
        { where: { id: id } }
    )
}

const getUserList = async () => {
    let users = []
    users = await db.User.findAll()
    return users
}

module.exports = {
    createNewUser, getUserList, deleteUser, getUserById, updateUserInfor
}