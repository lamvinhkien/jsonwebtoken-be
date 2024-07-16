import db from "../models/index";
import bcrypt from 'bcryptjs';
import Op from "sequelize/lib/operators";

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

const checkPassword = async (inputPassword, hashPassword) => {
    let res = await bcrypt.compare(inputPassword, hashPassword);
    return res;
}

const handleRegisterUser = async (user) => {
    try {
        let isExistEmail = await checkEmail(user.email)
        if (isExistEmail === true) {
            return {
                EM: "Email is exist!",
                EC: "0"
            }
        }

        let isExistPhone = await checkPhone(user.phone)
        if (isExistPhone === true) {
            return {
                EM: "Phone is exist!",
                EC: "0"
            }
        }

        await db.User.create({
            email: user.email,
            phone: user.phone,
            username: user.username,
            password: hashUserPassword(user.password)
        })

        return {
            EM: "Register successfully!",
            EC: "1"
        }
    } catch (e) {
        console.log(e)
        return {
            EM: "Error user register from server",
            EC: "0"
        }
    }

}

const handleLoginUser = async (valueLogin, password) => {
    try {
        let userData = await db.User.findOne({
            where: {
                [Op.or]: [{ email: valueLogin }, { phone: valueLogin }]
            }
        })

        if (userData) {
            let isCorrectPassword = await checkPassword(password, userData.password)
            if (isCorrectPassword) {
                return {
                    EM: "Login successfully!",
                    EC: "1",
                    DT: userData.email
                }
            }
        }

        return {
            EM: "Your Email/Phone number or password is incorrect, Please try again!",
            EC: "0",
            DT: ""
        }
    } catch (error) {
        console.log(">>> Check error Login ", error)
        return {
            EM: "Error user login from server",
            EC: "0", 
            DT: ""
        }
    }

}

module.exports = {
    handleRegisterUser, handleLoginUser
}