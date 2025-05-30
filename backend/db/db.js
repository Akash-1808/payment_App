const mongoose = require("mongoose");
const { string, object } = require("zod");
mongoose.connect("Your_mongodb_url")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength:3,
        
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength:6
    },
    firstname:{
        type:String,
        required:true,
        trim:true,
        maxLength:6
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        maxLength:15
    },
    
})

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    balance:{
        type:Number,
        require:true
    }
})

const Account = mongoose.model('Account',accountSchema);
const User =mongoose.model('User',userSchema); 

module.exports = {
User,
Account
}
