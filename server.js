const express =require('express')
const session = require('express-session');
const bcrypt = require('bcryptjs');
const pool=require('./db.js');
const cors =require('cors');

const app=express();
const PORT=3000;

app.use(cors());
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
        await pool.query('INSERT INTO users (nome,email,password) VALUES ($1,$2)'[nome,email,hashedPassword]);
        res.redirect('/login.html');

    }
    catch(err){
        console.error(err);
        res.send('erro no cadastro');


    }
});

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    try{
        const result =await pool.query('SELECT * FROM users WHERE email=$1',[email]);
        const user=result.rows[0];

        if(result.rowCount===0){
            return res.send('usuario nao encontrado');
        }
    
        const valid = await bcrypt.compare(password,user.password);
        if(!valid){
            return res.send('senha incorreta');
        }
        req.session.userId=user.indexOf;
        res.redirect('/home.html');
        

    }catch(err){
        console.error(err);
        res.send('erro no login');

    }

});

app.get('/dashboard',async(req,res)=>{
 if(!req.session.userId){
    return res.redirect('/login.html');
 }
 res.sendFile(__dirname + '/public/dashborad.html');

});

app.listen(PORT,()=>{
    console.log('servidor rodando em http://localhost:'+PORT);
});

