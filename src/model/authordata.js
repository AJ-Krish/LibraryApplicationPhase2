const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://userone:userone@ictprojects.i9kbc.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const Authorschema=new mongoose.Schema({
    name:String,
    genre:String,
    work:String,
    image:String
});


var Authordata=mongoose.model('authordata',Authorschema);

module.exports = Authordata;