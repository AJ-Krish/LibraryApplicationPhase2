const express= require('express');
const booksRouter=express.Router();
const bookdata=require('../model/bookdata');


function bookroutes(nav){
    


// var books=[
//     {
//         title:'Randamoozham',
//         author:'M. T. Vasudevan Nair',
//         genre:'Mythology, Drama, Historical fiction',
//         image:'Randamoozham.jpg'
//     },
//     {
//         title:'Khasakkinte Itihasam',
//         author:'O. V. Vijayan',
//         genre:'Novel, Fiction, Magical Realism',
//         image:'khasak.jpg'
//     },
//     {
//         title:'Mayyazhippuzhayude Theerangalil',
//         author:'M. Mukundan',
//         genre:'Historical Fiction',
//         image:'Mayyazhippuzhayude.jpg'
//     },
//     {
//         title:'Wings of Fire',
//         author:'A P J Abdul Kalam',
//         genre:'Autobiography',
//         image:'wingsof.jpg'
//     },
//     {
//         title:'Harry Potter',
//         author:'J.K Rowling',
//         genre:'Fantasy Fiction, Drama, Young adult fiction, Mystery, Thriller',
//         image:'harry.jpg'
//     }
// ];



booksRouter.get('/',function (req,res) {
    bookdata.find()
    .then(function (books) {
        res.render("books",
        {
            nav,
            title:'Books',
            books
        });
        
    });
   
    
});


booksRouter.get('/:id',function (req,res) {

    const id=req.params.id; 
    bookdata.findOne({_id:id})
    .then(function(book) {
        res.render('book',
        {
            nav,
            title:'Library',
            book
        });
    
        
    });

   
    
});

    return booksRouter;

}
module.exports=bookroutes;

