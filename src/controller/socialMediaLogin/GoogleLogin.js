import passport from 'passport';
import GoogleStrategy from 'passport-google-oidc';
import { handleLoginSocialMedia } from '../../service/login-register';
require("dotenv").config();

const configGoogleLogin = () => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:8080/api/oauth2/redirect/google',
        scope: ['profile', 'email']
    }, async function verify(issuer, profile, cb) {
        let dataRaw = {
            email: profile.emails[0].value,
            username: profile.displayName
        }
        let user = await handleLoginSocialMedia('GOOGLE', dataRaw)

        return cb(null, user)
    }));
}

export default configGoogleLogin;