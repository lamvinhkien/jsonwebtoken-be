import db from "../models/index";

const createRoles = async (roles) => {
    try {
        let currentRoles = await db.Role.findAll({
            attributes: ['url', 'description'],
            raw: true
        })

        let compareRoles = roles.filter(({ url: url1 }) => !currentRoles.some(({ url: url2 }) => url2 === url1));

        if (compareRoles.length === 0) {
            return {
                EM: "The role you created is already available.",
                EC: "0",
                DT: []
            }
        }

        let result = await db.Role.bulkCreate(compareRoles)
        let message = result.length > 1 ? `${result.length} roles` : `${result.length} role`
        return {
            EM: `Create ${message} successfully!`,
            EC: "1",
            DT: result
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

const getRole = async () => {
    try {
        let roles = await db.Role.findAll({
            attributes: ['id', 'url', 'description']
        })

        if (roles) {
            return roles
        } else {
            return {
                EM: "Error from server",
                EC: "0",
                DT: []
            }
        }

    } catch (error) {
        console.log(error)
        return {
            EM: "Error from server",
            EC: "0",
            DT: []
        }
    }
}

const getRoleWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit
        let { count, rows } = await db.Role.findAndCountAll({
            attributes: ["id", "url", "description"],
            offset: offset,
            limit: limit,
            order: [["id", "DESC"]],
        })
        let totalPage = Math.ceil(count / limit) // lam tron len

        return {
            page: page,
            totalPage: totalPage,
            offset: offset,
            roles: rows
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "Error from server",
            EC: "0",
            DT: []
        }
    }
}

const deleteRole = async (id) => {
    try {
        let role = await db.Role.findOne({
            where: { id: id }
        })

        if (role) {
            await db.Role.destroy({
                where: { id: role.id }
            })

            return {
                EM: "Delete role successfully!",
                EC: "1",
                DT: []
            }
        } else {
            return {
                EM: "Role not exist",
                EC: "0",
                DT: []
            }

        }
    } catch (error) {
        console.log(error)
        return {
            EM: "Error from server",
            EC: "0",
            DT: []
        }
    }
}

const checkUrlExist = async (url) => {
    let check = true
    let currentUrl = await db.Role.findAll({
        attributes: ['url'],
        raw: true
    })

    currentUrl.find((item) => {
        if (item.url === url) {
            check = false
        }
    })

    return check
}

const updateRole = async (data) => {
    try {
        let role = await db.Role.findOne({
            where: { id: data.id }
        })


        if (role) {
            let check = await checkUrlExist(data.url)

            if (check) {
                await role.update({
                    url: data.url,
                    description: data.description
                })

                return {
                    EM: "Update role successfully!",
                    EC: "1",
                    DT: role
                }
            } else {
                return {
                    EM: "URL exist.",
                    EC: "0",
                    DT: {}
                }
            }
        } else {
            return {
                EM: "Role not exist.",
                EC: "0",
                DT: {}
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "Error from server",
            EC: "0",
            DT: []
        }
    }
}

module.exports = {
    createRoles, getRoleWithPagination, deleteRole, updateRole, getRole
}