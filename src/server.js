import express from "express";
import configViewEngine from "./config/viewEngine";
import initApiRoutes from "./routes/api";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import configCors from "./config/cors";
import configGoogleLogin from "./controller/socialMediaLogin/GoogleLogin";
import configFacebookLogin from "./controller/socialMediaLogin/FacebookLogin";
import configConnectSessionSql from "./config/configConnectSessionSql";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// config view engine
configViewEngine(app);

app.use(express.static('src/public'));

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config cookie-parser
app.use(cookieParser())

// config cors
configCors(app);

// Config connect session Sql
configConnectSessionSql(app)

// config Google login
configGoogleLogin()

// config Facebook login
configFacebookLogin()

// init routes
initApiRoutes(app);

app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on the port = " + PORT);
})

