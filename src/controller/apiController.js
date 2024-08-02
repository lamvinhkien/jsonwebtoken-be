import loginRegister from "../service/login-register"
require("dotenv").config(); // doc file .env

const handleRegister = async (req, res) => {
    try {
        if (!req.body.email || !req.body.phone || !req.body.username || !req.body.password) {
            return res.json({
                EM: "Lack of parameters",
                EC: "0",
            })
        }

        let regEmail = /\S+@\S+\.\S+/;
        let validateEmail = regEmail.test(req.body.email)
        if (!validateEmail) {
            return res.json({
                EM: "Email is invalid!",
                EC: "0",
                DT: "email"
            })
        }

        let regPhone = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
        let validatePhone = regPhone.test(req.body.phone)
        if (!validatePhone) {
            return res.json({
                EM: "Phone is invalid!",
                EC: "0",
                DT: "phone"
            })
        }

        let regName = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ'\s]*$/;
        let validateName = regName.test(req.body.username)
        if (!validateName) {
            return res.json({
                EM: "Username is invalid!",
                EC: "0",
                DT: "username"
            })
        }

        if (req.body.password && req.body.password.length < 6) {
            return res.json({
                EM: "Password length must be at lastest 6 character!",
                EC: "0",
                DT: "password"
            })
        }

        let data = await loginRegister.handleRegisterUser(req.body)

        return res.json({
            EM: data.EM,
            EC: data.EC,
        })
    } catch (error) {
        console.log(error)
        return res.json({
            EM: "Error from server",
            EC: "0",
            DT: ""
        })
    }
}

const handleLogin = async (req, res) => {
    try {
        if (!req.body.valueLogin || !req.body.password) {
            return res.json({
                EM: "Lack of parameters",
                EC: "0"
            })
        }

        let regEmail = /\S+@\S+\.\S+/;
        let validateEmail = regEmail.test(req.body.valueLogin)

        let regPhone = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
        let validatePhone = regPhone.test(req.body.valueLogin)

        if (validateEmail || validatePhone) {
            let data = await loginRegister.handleLoginUser(req.body.valueLogin, req.body.password)

            if (data.EC === "1") {
                res.cookie("jwt", data.DT.access_token, { httpOnly: true, maxAge: process.env.EXPIRES_IN })
            }

            return res.json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
            })
        } else {
            return res.json({
                EM: "Your email or phone number is invalid!",
                EC: "0",
            })
        }
    } catch (error) {
        console.log(error)
        return res.json({
            EM: "Error from server",
            EC: "0",
            DT: ""
        })
    }
}

const handleLogout = (req, res) => {
    try {
        res.clearCookie("jwt");
        return res.json({
            EM: "Remove cookies successfully!",
            EC: "1",
            DT: ""
        })
    } catch (error) {
        console.log(error)
        return res.json({
            EM: "Error from server",
            EC: "0",
            DT: ""
        })
    }
}

module.exports = {
    handleRegister, handleLogin, handleLogout
}