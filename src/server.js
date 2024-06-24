import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import connection from "./config/connectDB";

require("dotenv").config(); // doc file .env

const app = express();
const PORT = process.env.PORT || 8080;

// Connection DB
connection();

// config view engine
configViewEngine(app);

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init web routes
initWebRoutes(app);

app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = " + PORT);
})
