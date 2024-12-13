const bcrypt = require("bcrypt")
 
const saltRounds = 10;

async function Hasing(req,res,next){

const password = req.body.password;
 const hash = await bcrypt.hash(password,saltRounds);
 if(hash){
    req.headers.password =hash
    // console.log(hash)
    next();
 } 
 else{
    // console.log("something")
    res.json({msg:'something wrong with hasing'})
 }
}


module.exports = Hasing