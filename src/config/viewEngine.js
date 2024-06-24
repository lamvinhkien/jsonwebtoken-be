import express from "express";

/**
 * 
 * @param {*} app - express app
 * File nay cau hinh library ejs, va set noi chua' file ejs trong views
 */

const configViewEngine = (app) => {
    app.use(express.static('./src/public'))
    app.set('view engine', "ejs")
    app.set('views', "./src/views")
}

export default configViewEngine;