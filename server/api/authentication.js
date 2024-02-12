import passport from "passport";
import {User} from './database.js'
import { Strategy as LocalStrategy } from "passport-local";


passport.use(new LocalStrategy((usernameOrPhone, password, done) => {
    User.findOne({ $or: [{ username: usernameOrPhone }, { phone: usernameOrPhone }] })
        .then(user => {
            if (!user) {
                return done(null, false, { message: 'Incorrect username or phone.' });
            }
            user.authenticate(password, (err, authenticatedUser) => {
                if (err) {
                    return done(err);
                }
                if (!authenticatedUser) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, authenticatedUser);
            });
        })
        .catch(err => {
            return done(err);
        });
}));

export const register = (req, res) => {
    const username = req.body.username;
    const phone = req.body.phone;
    const password = req.body.password;

    User.register({ username: username, phone: phone }, password, (err, newUser) => {
        if (err) {
            res.send({ message: err.message });
        } else {
            // Correct the structure of passport.authenticate
            passport.authenticate('local')(req, res, () => {
                res.status(200).send({
                    message: 'User register successful',
                    authenticated: true,
                    userId: newUser._id,
                });
            });
        }
    });
};

export const login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log('User not registered');
            return res.status(401).json({
                message: info.message,
                authenticated: false
            });
        }
        req.logIn(user, (loginErr) => {
            if (loginErr) {
                return next(loginErr);
            }
            return res.status(200).json({
                message: 'User login successful',
                authenticated: true,
                userId: user._id,
            });
        });
    })(req, res, next);
};

export const logout = (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.status(200).send({ message: "user logout" })
    })
}

export const user = async (req, res) => {
    if (req.headers.userid) {
        const user = await User.findById(req.headers.userid);
        res.status(200).send(user);
    }
    else {
        res.status(404).send("user not found");
    }
}

