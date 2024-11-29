import express from "express";
import passport from "passport";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import roleController from "../controller/roleController";
import groupController from "../controller/groupController";
import taskController from "../controller/taskController";
import { checkUserLogin, checkUserPermission } from "../middleware/JWTAction";
import upload from "../middleware/UploadAction";
import 'dotenv/config';

const router = express.Router();

const initApiRoutes = (app) => {

    // Login, Logout, Register
    router.post("/register", apiController.handleRegister)
    router.post("/login", apiController.handleLogin)
    router.post("/logout", checkUserLogin, apiController.handleLogout)


    // Google
    router.get("/login/google", passport.authenticate('google'))
    router.get('/oauth2/redirect/google', passport.authenticate('google', {
        failureRedirect: process.env.REACT_URL + '/login'
    }), (req, res) => {
        res.cookie("at_user", req.user.access_token, { httpOnly: true, maxAge: process.env.EXPIRES_IN_COOKIES })
        res.cookie("rt_user", req.user.refresh_token, { httpOnly: true, maxAge: process.env.EXPIRES_IN_COOKIES })
        res.redirect(process.env.REACT_URL + '/users')
    });


    // Facebook
    router.get("/login/facebook", passport.authenticate('facebook'))
    router.get('/oauth2/redirect/facebook', passport.authenticate('facebook', {
        failureRedirect: process.env.REACT_URL + '/login'
    }), (req, res) => {
        res.cookie("at_user", req.user.access_token, { httpOnly: true, maxAge: process.env.EXPIRES_IN_COOKIES })
        res.cookie("rt_user", req.user.refresh_token, { httpOnly: true, maxAge: process.env.EXPIRES_IN_COOKIES })
        res.redirect(process.env.REACT_URL + '/users')
    });


    // Forgot password
    router.post('/send-otp', apiController.handleForgotPassword)
    router.post('/reset-password', apiController.handleResetPassword)

    
    // Task routes
    router.get("/task/show-all", checkUserLogin, checkUserPermission, taskController.readFunc)
    router.post("/task/create", checkUserLogin, checkUserPermission, upload.array('files'), taskController.createFunc)
    router.post("/task/get-document", checkUserLogin, taskController.getDocumentFunc)
    router.post("/task/update", checkUserLogin, checkUserPermission, upload.array('files'), taskController.updateFunc)
    router.post("/task/delete", checkUserLogin, checkUserPermission, taskController.deleteFunc)


    // User routes
    router.get("/user/show-all", checkUserLogin, checkUserPermission, userController.readFunc)
    router.post("/user/create", checkUserLogin, checkUserPermission, userController.createFunc)
    router.put("/user/update", checkUserLogin, checkUserPermission, userController.updateFunc)
    router.delete("/user/delete", checkUserLogin, checkUserPermission, userController.deleteFunc)
    router.get("/user/get-account", checkUserLogin, userController.getUserAccount)
    router.post("/user/change-infor", checkUserLogin, userController.changeInfor)
    router.post("/user/change-password", checkUserLogin, userController.changePassword)


    // Role routes
    router.get("/role/get-all", checkUserLogin, roleController.readFuncWithoutPage)
    router.get("/role/show-all", checkUserLogin, checkUserPermission, roleController.readFunc)
    router.put("/role/update", checkUserLogin, checkUserPermission, roleController.updateFunc)


    // Group routes
    router.get("/group/show-all", checkUserLogin, groupController.readFunc)
    router.get("/group/show-all-with-pagination", checkUserLogin, checkUserPermission, groupController.readFuncWithPage)
    router.post("/group/get-group-with-roles", checkUserLogin, groupController.readFuncWithRoles)
    router.post("/group/assign-role-for-group", checkUserLogin, checkUserPermission, groupController.assignRoleForGroup)
    router.post("/group/create", checkUserLogin, checkUserPermission, groupController.createFunc)
    router.put("/group/update", checkUserLogin, checkUserPermission, groupController.updateFunc)
    router.delete("/group/delete", checkUserLogin, checkUserPermission, groupController.deleteFunc)


    return app.use("/api", router)
}

export default initApiRoutes;