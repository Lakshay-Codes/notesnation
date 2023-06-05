const mongoose=require('mongoose')
const mongoURI="mongodb://127.0.0.1:27017";
mongoose.set('strictQuery', true);
const connectToMongo=async ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo! successfully!");
    });
}
module.exports = connectToMongo;