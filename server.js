const express =require('express')
const session = require('express-session');
const bcrypt = require('bcrypt');
const db=require('./db');

const app=express();
const PORT=3000;

app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));
app.use(session({
    secret:'segredo123',
    resave:true,
    saveUninitialized:true
}));



app.post('/register',async(req,res)=>{
    const {username,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);

    try{
        await db.query('INSERT INTO users (noem,email,password) VALUES ($1$,$2)'[nome,email,hashedPassword]);
        res.redirect('/login.html');

    }
    catch(err){
        console.error(err);
        res.send('erro no cadastro');


    }
})
