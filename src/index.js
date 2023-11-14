const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;
const bcrypt = require("bcryptjs");

require("./db/conn");
const Register = require("./models/register");   
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const Partialspath = path.join(__dirname, "../templates/partials");


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(Partialspath);
app.use(express.static(staticpath)); 
 
  app.get("/", (req, res) => {
    res.render("Home");
  });

  app.get("/about",(req,res)=>{
  res.render("Home");
  });

  app.get("/login",(req,res)=>{
    res.render("loginpage");
  });

  app.post("/register",async (req,res)=>{

    try{
        const password= req.body.password;
        const cpassword=req.body.confirmPassword;

        if(password === cpassword){
           
          const registerEmployee=new Register({
            UserName:req.body.UserName,
            password:req.body.password,
            confirmPassword:req.body.confirmPassword,
            email:req.body.email
          })

          const registered=await registerEmployee.save();
          res.status(201).render("index");

        }
        else{
          res.send("password are not matching..")
        }
    }catch(err){
      res.status(400).send(err);
    }
    });


    // login check
    app.post("/login",async (req,res)=>{
      try{
          const UserName =req.body.Username;
          const password=req.body.password;
          const userdata= await Register.findOne({UserName});

          const match = await bcrypt.compare(password, userdata.password);
         
          if(match){
            res.status(201).render("index");
          }
          else{
            res.send("Password are not matching...")
          }
      
      }
      catch(err){
        res.status(400).send("Invalid Username or Password")
      }
    });



app.get("*", (req,res)=>{
  res.render("error");
})
app.listen(port, () => {
  console.log(`Serving to the port ${port}`);
});
 