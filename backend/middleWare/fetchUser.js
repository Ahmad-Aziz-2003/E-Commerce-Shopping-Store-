const jwt = require('jsonwebtoken');


// //create functuon toi check the user tio fetch
const fetchUser =async (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"please authenticate uinsg valid token "})
    }
    else{
        try {
            const data =jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"please authenticate using a valid token"})
        }
    }
}
module.exports = fetchUser;