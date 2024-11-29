import express from "express";
import initApiRoutes from "./routes/api";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import configCors from "./config/cors";
import configGoogleLogin from "./controller/socialMediaLogin/GoogleLogin";
import configFacebookLogin from "./controller/socialMediaLogin/FacebookLogin";
import configConnectSessionSql from "./config/configConnectSessionSql";
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 8080;

// config public files
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

// running port
app.listen(PORT, () => {
    console.log(">>> Server is running on the port: " + PORT);
})

