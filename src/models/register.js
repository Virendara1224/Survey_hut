const mongoose=require("mongoose");
const bcrypt = require("bcryptjs")
const employeeSchema= new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
});

employeeSchema.pre("save",async function(next){
if(this.isModified("password")){
    console.log(`The current password is ${this.password}`);
    this.password =await bcrypt.hash(this.password,10);
    console.log(`The current password is ${this.password}`);
}
this.confirmPassword= undefined;

    next();
})

const Register=new mongoose.model("Register",employeeSchema);
module.exports=Register;