import userApiService from "../service/userApiService";

const readFunc = async (req, res) => {
    try {
        let page = req.query.page
        let limit = req.query.limit
        let users = await userApiService.getUserWithPagination(+page, +limit)

        if (users) {
            return res.json({
                EM: "Get users successfully!",
                EC: "1",
                DT: users
            })
        } else {
            return res.json({
                EM: "Users not exist",
                EC: "0",
                DT: ""
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

const createFunc = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

const updateFunc = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

const deleteFunc = async (req, res) => {
    try {
        let data = await userApiService.deleteUser(req.body.id)
        return res.json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    readFunc, createFunc, updateFunc, deleteFunc
}