const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://userone:userone@ictprojects.i9kbc.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const Loginschema=new mongoose.Schema({
    name:String,
    username:{ type: String, unique: true },
    mobile:String,
    password:String
});


var Logindata=mongoose.model('logindata',Loginschema);

module.exports = Logindata;