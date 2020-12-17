const express= require('express');
const Authordata = require('../model/authordata');
const authorRouter=express.Router();


function authorroutes(nav){
    


// var authors=[
//     {
//         name:'M. T. Vasudevan Nair',
//         genre:'Mythology, Drama, Historical fiction',
//         work:'Randamoozham',
//         link:'images/mtvas.jpg'
//     },
//     {
//         name:'O. V. Vijayan',
//         genre:'Novel, Fiction, Magical Realism',
//         work:'Khasakkinte Itihasam',
//         link:'images/ovvij.jpg'
//     },
//     {
//         name:'M. Mukundan',
//         genre:'Historical Fiction',
//         work:'Mayyazhippuzhayude Theerangalil',
//         link:'images/mmuk.jpg'
//     },
//     {
//         name:'A P J Abdul Kalam',
//         genre:'Autobiography',
//         work:'Wings of Fire',
//         link:'images/wingsof.jpg'
//     },
//     {
//         name:'J.K Rowling',
//         genre:'Fantasy Fiction, Drama, Young adult fiction, Mystery, Thriller',
//         work:'Harry Potter Novel series',
//         link:'images/jkr.jpg'
//     }
// ];


authorRouter.get('/',function (req,res) {
    Authordata.find()
    .then(function (authors) {
        res.render("authors",
        {
            nav,
            title:'Author',
            authors
        });
        
    });


  
    
});


authorRouter.get('/:id',function (req,res) {

    const id=req.params.id; 
    Authordata.findOne({_id:id})
    .then(function(author) {
        res.render('author',
        {
            nav,
            title:'Author',
            author
        });
    
        
    });

   
    
});

    return authorRouter;

}
module.exports=authorroutes;
