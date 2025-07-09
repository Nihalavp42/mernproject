const mongoose= require("mongoose")
const dbConnect = () =>{
    mongoose.connect("mongodb://localhost:27017/mechinetestuser")
    .then(()=>console.log("mongodb connected successfull"))
    .catch((err)=>console.log("mongodb connection failed",err))
}
module.exports = dbConnect;