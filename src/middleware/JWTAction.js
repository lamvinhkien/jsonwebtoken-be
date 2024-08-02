import jwt from "jsonwebtoken";
require("dotenv").config(); // doc file .env

const createToken = (payload) => {
    try {
        let token = jwt.sign(payload, process.env.PRIVATE_KEY, { expiresIn: process.env.EXPIRES_IN });
        return token;
    } catch (error) {
        console.log(error)
    }
}

const verifyToken = (token) => {
    try {
        let decoded = jwt.verify(token, process.env.PRIVATE_KEY);
        return {
            data: decoded
        }
    } catch (error) {
        return {
            EC: "0",
            EM: "User are not authenticated. Please login!",
            DT: ""
        }
    }
}

const checkUserLogin = (req, res, next) => {
    let cookiesJWT = req.cookies.jwt
    if (cookiesJWT) {
        let token = verifyToken(cookiesJWT)

        if (token && token.data) {
            req.token = token.data
            next()
        } else {
            return res.json({
                EC: "0",
                EM: "User are not authenticated. Please login!",
                DT: ""
            })
        }
    } else {
        return res.json({
            EC: "0",
            EM: "User are not authenticated. Please login!",
            DT: ""
        })
    }
}

const checkUserPermission = (req, res, next) => {
    let token = req.token
    let roles = token.data.Roles
    let currentUrl = req.path
    let canAccess = roles.some((item)=>{
        if(item.url === currentUrl){
            return true
        }
    })

    if (!roles || canAccess === false) {
        return res.json({
            EC: "0",
            EM: "You don't have permission!",
            DT: ""
        })
    } else {
        next()
    }
}

module.exports = {
    createToken, verifyToken, checkUserLogin, checkUserPermission
}