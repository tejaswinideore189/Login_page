const mongoose = require("mongoose");

// const DB = process.env.DATABASE

mongoose.connect("mongodb://127.0.0.1:27017/test1",{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})