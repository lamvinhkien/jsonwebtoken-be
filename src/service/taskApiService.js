import db from "../models/index";
import fs from "fs-extra";
import 'dotenv/config';

const getAllTask = async () => {
    try {
        let task = await db.Task.findAll()
        return {
            EM: "Get task successfully!",
            EC: "1",
            DT: task
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "Error from server",
            EC: "0",
            DT: "",
        };
    }
}

const createTask = async (reqData, reqImg) => {
    try {
        let task = await db.Task.create(reqData)

        let documents = reqImg.map((file) => ({
            TaskID: task.id,
            FilePath: file.filename
        }));

        await db.Task_Document.bulkCreate(documents)

        return {
            EM: "Create task successfully!",
            EC: "1",
            DT: "",
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "Error from server",
            EC: "0",
            DT: "",
        };
    }
}

const getDocument = async (id) => {
    try {
        let documents = await db.Task_Document.findAll({ where: { TaskID: id }, raw: true })

        if (documents && documents.length > 0) {
            documents.forEach((item, index) => {
                if (item.FilePath) {
                    item.GetFilePath = `http://localhost:${process.env.PORT}/uploads/${item.FilePath}`
                }
            })
        }

        return {
            EM: "Get documents successfully!",
            EC: "1",
            DT: documents
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "Error from server",
            EC: "0",
            DT: "",
        };
    }
}

const updateTask = async (reqData, reqFiles) => {
    try {
        let task = await db.Task.findOne({ where: { id: reqData.id } })

        if (!task) {
            return {
                EM: "Not found Task!",
                EC: "0",
                DT: "",
            };
        }

        if (reqData.filesToDelete && reqData.filesToDelete !== '') {
            const filesToDeleteArray = JSON.parse(reqData.filesToDelete);
            if (filesToDeleteArray.length > 0) {
                let taskDocument = await db.Task_Document.findAll({ where: { TaskID: task.id }, raw: true })
                if (taskDocument && taskDocument.length > 0) {
                    filesToDeleteArray.forEach(async (item, index) => {
                        let deleteFile = await db.Task_Document.destroy({ where: { id: item.id } })
                        if (deleteFile) {
                            await fs.unlink('src/public/uploads/' + item.FilePath)
                        }
                    })
                }
            }
        }

        let documents = reqFiles.map((file) => ({
            TaskID: task.id,
            FilePath: file.filename
        }));

        await db.Task_Document.bulkCreate(documents)
        await task.update({ title: reqData.title, description: reqData.description, endDate: reqData.endDate })

        return {
            EM: "Update task successfully!",
            EC: "1",
            DT: "",
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "Error from server",
            EC: "0",
            DT: "",
        };
    }
}

const deleteTask = async (id) => {
    try {
        let task = await db.Task.findOne({ where: { id: id } })

        if (!task) {
            return {
                EM: "Not found Task!",
                EC: "0",
                DT: "",
            };
        }

        let taskDocument = await db.Task_Document.findAll({ where: { TaskID: task.id }, raw: true })
        if (taskDocument && taskDocument.length > 0) {
            taskDocument.forEach(async (item, index) => {
                await fs.unlink('src/public/uploads/' + item.FilePath)
            })
        }

        await db.Task.destroy({ where: { id: task.id } })

        return {
            EM: "Delete task successfully!",
            EC: "1",
            DT: "",
        };
    } catch (error) {
        console.log(error);
        return {
            EM: "Error from server",
            EC: "0",
            DT: "",
        };
    }
}


module.exports = {
    getAllTask, createTask, updateTask, getDocument, deleteTask
}