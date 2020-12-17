const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://userone:userone@ictprojects.i9kbc.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const Bookschema=new mongoose.Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});


var Bookdata=mongoose.model('bookdata',Bookschema);

module.exports = Bookdata;