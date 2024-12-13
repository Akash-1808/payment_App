const {Account,User} = require("../db/db")
const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const authmidleware = require("../midleware/check")

router.get("/balance",authmidleware, async(req,res)=>{
   try {
    const user = await Account.findOne({
        userId:req.userId
    })

    const userBalance = user.balance


    res.json({
        balance:userBalance
    })
   } catch (error) {
    console.log(error)
    res.json({msg:"Error aa gya Account mein"})
   } 

})

router.post("/transfer",authmidleware, async (req,res) => {

    const  session = await mongoose.startSession();
           try {
            
            session.startTransaction();

            const account = await Account.findOne({
                userId:req.userId
            }).session(session)
            
            if(account.balance<req.body.amount){
               await session.abortTransaction();
                res.json({msg:"Insufficiant balance"})
            }



            const newAmount = account.balance -req.body.amount

           const user = await User.findOne({
                    _id:req.userId
            })


            const toAccount = await Account.findOne({
                userId:req.body.to
            }).session(session)

            if(!toAccount){
                
                throw new Error({msg:"Account Invaild"})
            }

               const userName = user.username
              
            await Account.updateOne({
                userId:req.userId
            },{
                $inc:{
                    balance:-req.body.amount}
            }).session(session)

            await Account.updateOne({
                userId:req.body.to
            },{
                $inc:{
                    balance:req.body.amount
                }
            }).session(session)


            await session.commitTransaction()
            res.json({msg:"Transcanction Done",
                newAmount,
                userName
            })
           } catch (error) {
            console.log("Error:", JSON.stringify(error, null, 2));
            await session.abortTransaction();
            res.status(404).json({
                msg:"Error aa gya"
            })
           } 
           finally{
            session.endSession()
           }


})

module.exports=router
