import groupApiService from "../service/groupApiService";

const readFunc = async (req, res) => {
    try {
        let data = await groupApiService.getAllGroup()
        return res.json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
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

const readFuncWithRoles = async (req, res) => {
    try {
        let data = await groupApiService.getGroupWithRoles(req.body.id)
        return res.json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
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

const assignRoleForGroup = async (req, res) => {
    try {
        let data = await groupApiService.assignRoleForGroup(req.body)
        return res.json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
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
    readFunc, readFuncWithRoles, assignRoleForGroup
}