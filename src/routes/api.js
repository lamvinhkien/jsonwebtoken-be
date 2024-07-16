import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";

const router = express.Router();

/**
 * 
 * @param {*} app - express app
 * FIle nay cau hinh dieu huong cac routes
 */
const initApiRoutes = (app) => {
    router.post("/register", apiController.handleRegister)
    router.post("/login", apiController.handleLogin)

    router.get("/user/show-all", userController.readFunc)
    router.post("/user/create", userController.createFunc)
    router.put("/user/update", userController.updateFunc)
    router.delete("/user/delete", userController.deleteFunc)

    router.get("/group/show-all", groupController.readFunc)
    
    return app.use("/api", router)
}
export default initApiRoutes;