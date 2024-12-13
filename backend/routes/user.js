const express =require("express"); 
const { User, Account } = require("../db/db");
const router = express.Router();
const zod = require("zod")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config");
const authmidleware = require("../midleware/check");

const signupSchema = zod.object({
                     username:zod.string().email().min(3),
                    firstname:zod.string().max(6),
                    lastname:zod.string().max(15),
                    password:zod.string().max(6),
                    amount:zod.string() 

})

const signinSchema = zod.object({
                username:zod.string().email(),
                password:zod.string().min(6)

})


const updateSchema =zod.object({
            password:zod.string().optional(),
            firstname:zod.string().optional(),
            lastname:zod.string().optional()
})

const saltRounds = 10;

router.post('/signup',async(req,res) => {
           try {
            const body = req.body;
            const  {sucess} = signupSchema.safeParse(body);
            //checkhing inputs
            if(!{sucess}){
                res.json({msg:"Email taken / Incorrect input"});
            }
           else{ 
            
            // hashing password
            const hash = await bcrypt.hash(body.password,saltRounds);
            const user = await User.findOne({
                username:body.username
            })
            if(user){
                res.json({msg:"Email already taken/Input incorrect"});
            }
            // create user
                    const newUSer = await User.create({
                    username:body.username,
                    firstname:body.firstname,
                    lastname:body.lastname,
                    password:hash
                })
                const userId = newUSer._id
            const intialAmount =  Math.round(1 + Math.random() * 10000);
                    
            await Account.create({
                userId:userId,
                balance: intialAmount
            });

                
                // creating jwt
               const token = jwt.sign({
                    userId
                },JWT_SECRET)
                res.json({msg:"User created Succesfully",
                    token:token
                });
            }
           } catch (error) {
            console.log(error);
            res.status(411).json({msg:"Error aa gya"})
           } 
})

router.post("/signin",async (req,res)=>{
            // const username = req.headers.username
            // const password = req.headers.password;
            const body = req.body;
            const  {sucess} = signinSchema.safeParse(body);
            //checkhing inputs
            if(!{sucess}){
                res.json({msg:"Email taken / Incorrect input"});
            }   
            try {
                const user = await User.findOne({
                username:body.username
            })
            
            if(user){
                const hasing = await bcrypt.compare(body.password,user.password)
                if(hasing){
                    const userId = user._id
                    const balance = Math.round(1+Math.random()*1000)
                    await Account.create({
                            userId,
                            balance
                    })
                    
                    
                    
                    // creating jwt

                   const token = jwt.sign({
                        userId
                    },JWT_SECRET)
                    

                    res.json({msg:"user signin sucessfully",
                        token:token
                    })

                }
                else{
                    res.status(500).json({msg:"wrong password"})
                }
            }
            else{
                res.status(500).json({msg:"user not found"})
            }
            } catch (error) {
                console.log(error)
                res.status(404).json({msg:"Error aa gya"})
            } 
        })


  router.get("/",authmidleware,async (req,res)=>{
        // const userId = req.useId;

   try {
    const user = await User.findOne({
            _id : req.userId
        })
            
        const account = await Account.findOne({
            userId:req.userId
        })
        
            res.json({
                msg:"USer Authanticated",
                user:{intialAmount:account.balance,
                username:user.username}
            })
   }     
    catch (error) {
    console.log(error)
    res.status(411).json({msg:"Error during get req "})

  }})


  router.put("/",authmidleware, async (req,res)=>{
            const body =req.body;
            const userId = req.userId
           const {sucess} = updateSchema.safeParse(body)
                if(!{sucess}){
                    res.status(404).json("Wrong input")
                }
                 
                
                
                
                const hash = await bcrypt.hash(body.password,saltRounds)
               const user = await User.updateOne({
                    _id:userId
                },{
                password:hash,
                firstname:body.firstname,
                lastname:body.lastname
                })
                    res.json({msg:"User updated successfully"
                        ,user
                    })
  })


  router.get("/bulk",authmidleware,async (req,res)=>{
            const filter = req.query.filter || "";
          try {
            const user = await User.find({
                $or:[{
                        firstname:{
                            $regex:filter
                        }
                },
                {
                lastname:{
                    $regex:filter
                }
            }]
            })
            

            res.json({
                user:user.map(user=>({
                    username:user.username,
                    firstname:user.firstname,
                    lastname:user.lastname,
                    _id:user._id
                }))
            })
          } catch (error) {
            res.status(500).json({msg:"Error aa gya"})
          }  
  })



module.exports = router;