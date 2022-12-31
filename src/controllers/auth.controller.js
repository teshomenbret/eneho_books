// some configration is nedd
import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import config from '../configs/config.js'


const signin = async (req, res) => {

    try {

        let user = await User.findOne({ "email": req.body.email })
        if (!user)
            return res.status(401).json({ error: "User not found" })
        if (!user.authenticate(req.body.password)) {
            return res.status(401).send({ error: "Email and password don't match." })
        }

        var token = jwt.sign(
                        {
                            id: user._id
                        },
                        config.jwtSecret , 
                        
                        { expiresIn: 60 * 60 }
                
                ); 

        res.cookie('t', token, { expire: new Date() + 9999 })
        return res.json(
                    {token,
                    user: {_id: user._id,
                            name: user.name,
                            email: user.email
                        }
                    })
    } catch (err) {
        return res.status(401).json({ error: "Could not sign in" })
    }
}

// TODO
// this function need to delete the user permantily
const signout = (req, res) => {
    res.clearCookie("t")
    return res.status(200).json({
        message: "signed out"
    })
   }


const requireSignin = async (req, res, next) => {
    try{
        let auth = req.headers['authorization'];
        if (auth && auth.toLowerCase().indexOf('bearer') == 0) {
            let inToken = auth.slice('bearer '.length);
            let decoded = jwt.verify(inToken, config.jwtSecret);
            let user = await User.findById(decoded.id)
            if (!user)
                return res.status(401).json({ error: "User not found wrong token" })
            req.auth = user
            next();
        }
        else{
            return res.status(403).json({
                error: "User is not authorized no tokrn"
            })
        }
    } catch (err) {
        return res.status(401).json({ error: "wrong token" })
    }
}
       
const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id
    if (!(authorized)) {
        return res.status(403).json({
                        error: "User is not authorized"
                    })
    }
    next();
}

const isAdmin = (req, res, next) => {
    if (req.auth.role === 0) {
        return res.status(403).json({
            error: 'Admin resourse! Access denied'
        });
    }
    next();
};
   
export default { signin, signout,requireSignin, hasAuthorization,isAdmin }



