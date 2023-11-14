

// const mongoDB="mongodb://localhost:27017/Surveydata";
// const mongoose=require("mongoose");
// mongoose.connect(mongoDB,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// }).then(()=> console.log("connection is succesfull....."))
// .catch((err)=> console.log(`no connection...`));

const mongoDB="mongodb://127.0.0.1:27017/Survey_data";
const mongoose=require("mongoose");
mongoose.connect(mongoDB).then(()=> console.log("connection is succesfull....."))
.catch((err)=> console.log(err));