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

module.exports = {
    getAllGroup
}