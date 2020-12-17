const express= require('express');
const Logindata = require('../model/logincredentials');
const signupRouter=express.Router();


function signuproutes(nav){
    


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


signupRouter.get('/',function (req,res) {
    res.render("signup",
    {
        nav,
        title:'SIGNUP'
        
    });
    
});

signupRouter.post('/success',function (req,res) {

    var item={
        name:req.body.name,
        username:req.body.username,
        mobile:req.body.mobile,
        password:req.body.password

    }
    // console.log(req.body);
    var logcred = Logindata(item);
    logcred.save(function(err) {
        
        // console.log(err);
        if (err) {
            
            res.render("signupsuccess",{
                nav,
                title:'SIGNUP',
                val:'Unsuccessfull'
            
             });
            
           
            
            
        }
        else{
            res.redirect('/books');
         
        }

        
       

      });



    
    
});






    return signupRouter;

}
module.exports=signuproutes;
