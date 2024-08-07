import db from "../models/index";

const getAllGroup = async () => {
    try {
        let group = await db.Group.findAll({
            order: [
                ["name", "ASC"]
            ]
        })

        return {
            EM: "Get group successfully!",
            EC: "1",
            DT: group
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "Error from server",
            EC: "0",
            DT: ""
        }
    }
}

const getGroupWithRoles = async (id) => {
    try {
        let group = await db.Group.findOne({
            where: { id: id },
            attributes: ['id', 'name', 'description'],
            include: { model: db.Role , attributes: ['id', 'url', 'description'], through: { attributes: [] }}
        })

        if(group){
            return {
                EM: "Get group with roles successfully!",
                EC: "1",
                DT: group
            }
        } else {
            return {
                EM: "Group not exist",
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

const assignRoleForGroup = async (data) => {
    try {
        await db.Group_Role.destroy({
            where: { groupId: data.groupId }
        })

        await db.Group_Role.bulkCreate(data.roles)

        return {
            EM: "Assign role for group successfully!",
            EC: "1",
            DT: {}
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
    getAllGroup, getGroupWithRoles, assignRoleForGroup
}