const express=require("express");
const app = express();
const hbs=require("hbs");
const path=require("path");

const port=8000;
const staticpath= path.join(__dirname , "../public");
const templatesPath= path.join(__dirname , "../templates");
const partialpath= path.join(__dirname , "../templates/partial");

// console.log(partialpath);

app.set("view engine", "hbs");
app.set("views", templatesPath);
// hbs.registerPartial(partialpath);
app.get("/", (req,res)=>{
    res.render("about");
})
app.listen(port, ()=>{
    console.log(`Listining to the ${port}`);
})