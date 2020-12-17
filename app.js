const express= require('express');

const app = express();
const port = process.env.PORT || 5000;

const nav=[
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Authors'
    },
    {
        link:'/signup',
        name:'SignUp!!'
    },
    {
        link:'/login',
        name:'Login'
    },
    {
        link:'/',
        name:'logout'
    }

];


const booksRouter=require('./src/routes/booksRoutes')(nav);
const authorRouter=require('./src/routes/authorsRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views')
app.use('/books',booksRouter);

app.use('/authors',authorRouter);

app.use('/signup',signupRouter);

app.use('/login',loginRouter);

app.use('/admin',adminRouter);

app.get('/',function (req,res) {
    res.render("index",
    {
        nav,
        title:'Library'
        
    });
    
});




app.listen(port,()=>{ console.log("Server Ready at " + port) });