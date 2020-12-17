const express= require('express');

const Authordata = require('../model/authordata');
const adminRouter=express.Router();
const bookdata=require('../model/bookdata');




function adminroutes(nav){
    





adminRouter.get('/',function (req,res) {
    res.render("adminLogin",
    {
        nav,
        title:'ADMIN'
        
    });
    
});
adminRouter.get('/books',function (req,res) {

    bookdata.find()
    .then(function (books) {
        res.render("adminbooks",
        {
            nav,
            title:'Books',
            books
        });
        
    });
    
});
adminRouter.get('/authors',function (req,res) {

    Authordata.find()
    .then(function (authors) {
        res.render("adminauthors",
        {
            nav,
            title:'Authors',
            authors
        });
        
    });
    
});
adminRouter.get('/books/update/:id',function (req,res) {
    const id=req.params.id; 
    
        res.render("updatebook",
        {
            nav,
            title:'update book',
            id
        });
        
});
adminRouter.get('/authors/update/:id',function (req,res) {
    const id=req.params.id; 
    
        res.render("updateauthor",
        {
            nav,
            title:'update author',
            id
        });
        
});

adminRouter.post('/books/updated/:id',function (req,res) {
    console.log(req.body);
    var id=req.params.id;
  
    const update={
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        image: req.body.image
        
       }
  
       bookdata.findByIdAndUpdate({_id:id},{$set:update},function(err){
        if(err) {
            console.log(err);
        }else{
        
        res.redirect('/admin/books');
        }
      });
  
   
     
    

});
adminRouter.post('/authors/updated/:id',function (req,res) {
    console.log(req.body);
    var id=req.params.id;
  
    const update={
        name: req.body.name,
        genre: req.body.genre,
        work: req.body.work,
        image: req.body.image
        
       }
  
       Authordata.findByIdAndUpdate({_id:id},{$set:update},function(err){
        if(err) {
            console.log(err);
        }else{
        
        res.redirect('/admin/authors');
        }
      });
  
   
     
    

});




    

adminRouter.get('/addbook',function (req,res) {

    res.render("addbook",
    {
        nav,
        title:'AddBook'
        
    });

    
});
adminRouter.get('/addauthor',function (req,res) {
    res.render("addauthor",
    {
        nav,
        title:'AddAuthor'
        
    });

    
});
adminRouter.get('/addbook/bookadded',function (req,res) {
    var item={
        title:req.query.title,
        author:req.query.author,
        genre:req.query.genre,
        image:req.query.image

    }
    var book = bookdata(item);
    book.save();
    res.render("booksadded",
    {
        nav,
        title:'BookAdded'
        
    });

    
});
adminRouter.get('/addbook/authoradded',function (req,res) {
    var item={
        name:req.query.name,
        genre:req.query.genre,
        work:req.query.work,
        image:req.query.image

    }
    var author = Authordata(item);
    author.save();

    res.render("authoradded",
    {
        nav,
        title:'AuthorsAdded'
        
    });

    
});


//book delete
adminRouter.get('/books/delete/:id',function (req,res) {
    const id=req.params.id; 
    
    
    bookdata.findByIdAndDelete(id, function (err) {
      if(err) console.log(err);
      console.log("Successful deletion");
    });
   res.redirect('/admin/books');
        
});

//author delete
adminRouter.get('/authors/delete/:id',function (req,res) {
    const id=req.params.id; 
    
    
    Authordata.findByIdAndDelete(id, function (err) {
      if(err) console.log(err);
      console.log("Successful deletion");
    });
   res.redirect('/admin/authors');
        
});




    return adminRouter;

}




module.exports=adminroutes;
