import passport from "passport";
import User from "./database";
import { Strategy as LocalStrategy } from "passport-local";


passport.use(new LocalStrategy((usernameOrPhone, password, done) => {
    User.findOne({ $or: [{ username: usernameOrPhone }, { email: usernameOrPhone }] })
        .then(user => {
            if (!user) {
                return done(null, false, { message: 'Incorrect username or phone.' });
            }

            // Use the authenticate method provided by passport-local-mongoose
            user.authenticate(password, (err, authenticatedUser) => {
                if (err) {
                    return done(err);
                }

                if (!authenticatedUser) {
                    return done(null, false, { message: 'Incorrect password.' });
                }

                // If authentication is successful, return the user
                return done(null, authenticatedUser);
            });
        })
        .catch(err => {
            return done(err);
        });
}));

export const register = (req,res) => {

    const username = req.body.username;
    const phone = req.body.phone;
    const password = req.body.password

    User.register({username:username,phone:phone},password,(err,newUser) => {
        if(err) {
            console.log(err);
            res.redirect('/login');
        }
        else{
            passport.authenticate('local'), (req, res, () => {
                res.redirect('/');
            })
        }
    })

}

export const login = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true, // Enable flash messages if needed
    })(req, res, next);
};