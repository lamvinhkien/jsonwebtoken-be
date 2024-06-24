import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

/**
 * 
 * @param {*} app - express app
 * FIle nay cau hinh dieu huong cac routes
 */
const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelloWorld)
    router.get("/user", homeController.handleUserPage)
    router.post("/users/create-user", homeController.handleCreateNewUser)
    router.post("/delete-user/:id", homeController.handleDeleteUser)
    router.post("/update-user/:id", homeController.getUpdateUserPage)
    router.post("/users/update-user", homeController.handleUpdateUser)
    return app.use("/", router)
}
export default initWebRoutes;