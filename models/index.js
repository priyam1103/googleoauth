const mongoose=require("mongoose");
mongoose.set("debug",true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/LEARNGA",{
    keepAlive:true
});
module.exports.User=require("./user");