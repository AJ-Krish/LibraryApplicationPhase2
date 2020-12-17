const express= require('express');
const Logindata = require('../model/logincredentials');
const loginRouter=express.Router();


function loginroutes(nav){
    


// var authors=[
//     {
//         name:'Joseph',
//         genre:'cartoon',
//         work:'tom and jerry'
//     },
//     {
//         name:'jk rowling',
//         genre:'fantasy',
//         work:'Harry potter'
//     }
// ];


loginRouter.get('/',function (req,res) {
    res.render("login",
    {
        nav,
        title:'LOGIN'
        
    });
    
});
loginRouter.post('/success',function (req,res) {

    const { username, password } = req.body;
    // console.log(username, password );
    
       Logindata.findOne({
        username:username})
        .then(function(user){
        // console.log(user);
        if(password==user.password){
            console.log("success");
            res.redirect('/books');
        }
        else{
            res.render('incorrectpassword');
        }
        });
      
      

      
      
    

        // res.redirect('/books/none');
       
    
        
    });


   


    
    






    return loginRouter;

}
module.exports=loginroutes;
