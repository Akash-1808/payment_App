const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")
 

const authmidleware = (req,res,next)=>{
    const auth = req.headers.authorization
    if(!auth ){
        res.json({msg:"User not authorized 1"})
    }
    const jwttoken = auth.split(" ")[1];
    try {
        const data = jwt.verify(jwttoken,JWT_SECRET)
    req.userId = data.userId
        
    next();
    } catch (error) {
        res.json({msg:"Error in midleware"});
    }
    

}


module.exports = authmidleware