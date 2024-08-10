import db from "../models/index";
import bcrypt from 'bcryptjs';
import { getGroupRoles } from "./JWTService";
import { createToken } from "../middleware/JWTAction";

// hash password
const salt = bcrypt.genSaltSync(10);
const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const checkEmail = async (email) => {
    let check = await db.User.findOne({ where: { email: email } })
    if (check) {
        return true
    }
    return false
}

const checkPhone = async (phone) => {
    let check = await db.User.findOne({ where: { phone: phone } })
    if (check) {
        return true
    }
    return false
}

const getAllUser = async () => {
    return await db.User.findAll({
        attributes: ["id", "email", "phone", "username", "address", "sex"],
        include: { model: db.Group, attributes: ["name", "description"] },
    })
}

const getUserWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit
        let { count, rows } = await db.User.findAndCountAll({
            order: [["id", "DESC"]],
            attributes: ["id", "email", "phone", "username", "address", "sex"],
            include: { model: db.Group, attributes: ["name", "description", "id"] },
            offset: offset,
            limit: limit
        })
        let totalPage = Math.ceil(count / limit) // lam tron len

        return {
            page: page,
            totalPage: totalPage,
            offset: offset,
            users: rows
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "Error from server",
            EC: "0",
            DT: {}
        }
    }
}

const createNewUser = async (user) => {
    try {
        let isExistEmail = await checkEmail(user.email)
        if (isExistEmail === true) {
            return {
                EM: "Email is exist!",
                EC: "0",
                DT: "email"
            }
        }

        let isExistPhone = await checkPhone(user.phone)
        if (isExistPhone === true) {
            return {
                EM: "Phone is exist!",
                EC: "0",
                DT: "phone"
            }
        }

        let password = hashUserPassword(user.password)

        let data = await db.User.create({ ...user, password: password })
        return {
            EM: "Create new user successfully!",
            EC: "1",
            DT: data
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "Error from server",
            EC: "0",
            DT: {}
        }
    }
}

const updateUser = async (user) => {
    try {
        let res = await db.User.findOne({
            where: { id: user.id }
        })

        if (res) {
            let updateUser = await res.update({
                username: user.username,
                address: user.address,
                sex: user.sex,
                groupId: user.groupId
            })

            return {
                EM: "Update user successfully!",
                EC: "1",
                DT: updateUser
            }
        } else {
            return {
                EM: "User not exist",
                EC: "0",
                DT: {}
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "Error from server",
            EC: "0",
            DT: {}
        }
    }
}

const deleteUser = async (id) => {
    try {
        let user = await db.User.findOne({
            where: { id: id }
        })

        if (user) {
            await db.User.destroy({
                where: { id: user.id }
            })

            return {
                EM: "Delete user successfully!",
                EC: "1",
                DT: {}
            }
        } else {
            return {
                EM: "User not exist!",
                EC: "0",
                DT: {}
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "Error from server",
            EC: "0",
            DT: {}
        }
    }
}

const changeInfor = async (userData) => {
    try {
        let user = await db.User.findOne({
            where: { email: userData.email }
        })

        if (user) {
            let userEmail = user.email
            let userPhone = user.phone

            let dataEmail = userData.changeData.email
            let dataPhone = userData.changeData.phone
            let dataUsername = userData.changeData.username

            let checkEmailExist = await checkEmail(dataEmail)
            let checkPhoneExist = await checkPhone(dataPhone)

            if (!(dataEmail === userEmail || checkEmailExist === false)) {
                return {
                    EM: "Email exist!",
                    EC: "0",
                    DT: 'email'
                }
            }

            if (!(dataPhone === userPhone || checkPhoneExist === false)) {
                return {
                    EM: "Phone exist!",
                    EC: "0",
                    DT: 'phone'
                }
            }

            await user.update({
                email: dataEmail,
                phone: dataPhone,
                username: dataUsername,
            })

            let scope = await getGroupRoles(userData)

            let payload = {
                email: dataEmail,
                username: dataUsername,
                phone: dataPhone,
                data: scope,
            }

            let token = await createToken(payload)

            return {
                EM: "Save changes successfully!",
                EC: "1",
                DT: {
                    access_token: token,
                }
            }
        } else {
            return {
                EM: "User not exist!",
                EC: "0",
                DT: {}
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "Error from server",
            EC: "0",
            DT: {}
        }
    }
}

const checkPassword = async (inputPassword, hashPassword) => {
    let res = await bcrypt.compare(inputPassword, hashPassword);
    return res;
}

const changePassword = async (userData) => {
    try {
        let user = await db.User.findOne({
            where: { email: userData.email }
        })

        if(user){
            let currentPassword = userData.changeData.currentPassword
            let newPassword = userData.changeData.newPassword
            let confirmNewPassword = userData.changeData.confirmNewPassword
            let isCorrectPassword = await checkPassword(currentPassword, user.password)

            if(!currentPassword){
                return {
                    EM: "Please enter current password.",
                    EC: "0",
                    DT: 'current'
                }
            }
            if(!newPassword){
                return {
                    EM: "Please enter new password.",
                    EC: "0",
                    DT: 'new'
                }
            }
            if(!confirmNewPassword){
                return {
                    EM: "Please enter confirm new password.",
                    EC: "0",
                    DT: 'confirm'
                }
            }
            if(confirmNewPassword !== newPassword){
                return {
                    EM: "New password & Confirm password isn't same",
                    EC: "0",
                    DT: 'isNotSame'
                }
            }
            if(!isCorrectPassword){
                return {
                    EM: "Incorrect current password.",
                    EC: "0",
                    DT: 'incorrect'
                }
            }
            if(newPassword === currentPassword){
                return {
                    EM: "New password same as current password",
                    EC: "0",
                    DT: 'sameCurrent'
                }
            }

            await user.update({
                password: hashUserPassword(newPassword)
            })

            return {
                EM: "Save changes successfully!",
                EC: "1",
                DT: {}
            }
        } else {
            return {
                EM: "User not exist!",
                EC: "0",
                DT: {}
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "Error from server",
            EC: "0",
            DT: {}
        }
    }
}

module.exports = {
    getAllUser, createNewUser, updateUser, deleteUser, getUserWithPagination, changeInfor, changePassword
}