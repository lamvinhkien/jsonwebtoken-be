import express from "express";
import configViewEngine from "./config/viewEngine";
import initApiRoutes from "./routes/api";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import configCors from "./config/cors";
require("dotenv").config(); // doc file .env

const app = express();
const PORT = process.env.PORT || 8080;

// config view engine
configViewEngine(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config cookie-parser
app.use(cookieParser())

// config cors
configCors(app);

// init routes
initApiRoutes(app);

app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = " + PORT);
})

