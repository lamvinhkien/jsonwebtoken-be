import db from "../models/index";

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
            attributes: ["id", "email", "phone", "username", "address", "sex"],
            include: { model: db.Group, attributes: ["name", "description"] },
            offset: offset,
            limit: limit
        })
        let totalPage = Math.ceil(count / limit)

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

const createNewUser = async () => {

}

const updateUser = async () => {

}

const deleteUser = async (id) => {
    try {
        let user = await db.User.findOne({
            where: { id: id }
        })

        if(user){
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

module.exports = {
    getAllUser, createNewUser, updateUser, deleteUser, getUserWithPagination
}