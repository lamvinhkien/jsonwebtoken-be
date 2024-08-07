import roleApiService from "../service/roleApiService";

const readFunc = async (req, res) => {
    try {
        let page = req.query.page
        let limit = req.query.limit
        let roles = await roleApiService.getRoleWithPagination(+page, +limit)

        if (roles) {
            return res.json({
                EM: "Get roles successfully!",
                EC: "1",
                DT: roles
            })
        } else {
            return res.json({
                EM: "Role not exist",
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

const readFuncWithoutPage = async (req, res) => {
    try {
        let roles = await roleApiService.getRole()

        if (roles) {
            return res.json({
                EM: "Get roles successfully!",
                EC: "1",
                DT: roles
            })
        } else {
            return res.json({
                EM: "Role not exist",
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
        let data = await roleApiService.createRoles(req.body)
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

const updateFunc = async (req, res) => {
    try {
        if(!req.body.url){
            return res.json({
                EM: 'Please enter URL.',
                EC: "0",
                DT: {}
            })
        }

        if(!req.body.id){
            return res.json({
                EM: 'This role not founded.',
                EC: "0",
                DT: {}
            })
        }

        let data = await roleApiService.updateRole(req.body)
        if (data) {
            return res.json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
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

const deleteFunc = async (req, res) => {
    try {
        let data = await roleApiService.deleteRole(req.body.id)
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
    readFunc, createFunc, updateFunc, deleteFunc, readFuncWithoutPage
}