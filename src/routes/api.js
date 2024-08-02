import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import roleController from "../controller/roleController";
import groupController from "../controller/groupController";
import { checkUserLogin, checkUserPermission } from "../middleware/JWTAction";

const router = express.Router();

const initApiRoutes = (app) => {
    // Login, Logout, Register
    router.post("/register", apiController.handleRegister)
    router.post("/login", apiController.handleLogin)
    router.post("/logout", checkUserLogin, apiController.handleLogout)

    // User routes
    router.get("/user/show-all", checkUserLogin, checkUserPermission, userController.readFunc)
    router.post("/user/create", checkUserLogin, checkUserPermission, userController.createFunc)
    router.put("/user/update", checkUserLogin, checkUserPermission, userController.updateFunc)
    router.delete("/user/delete", checkUserLogin, checkUserPermission, userController.deleteFunc)
    router.get("/user/get-account", checkUserLogin, userController.getUserAccount)

    // Role routes
    router.get("/role/show-all", checkUserLogin, checkUserPermission, roleController.readFunc)
    router.post("/role/create", checkUserLogin, checkUserPermission, roleController.createFunc)
    router.put("/role/update", checkUserLogin, checkUserPermission, roleController.updateFunc)
    router.delete("/role/delete", checkUserLogin, checkUserPermission, roleController.deleteFunc)

    // Group routes
    router.get("/group/show-all", groupController.readFunc)
    
    return app.use("/api", router)
}

export default initApiRoutes;