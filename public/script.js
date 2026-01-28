const { response } = require("express");
const rota='http://localhost:3000'
const rLogin='/login'

const formulario=document.getElementById('form');

formulario.addEventListener('submit', async(err)=>{

err.preventDefault();
const email=document.getElementById('email').value;
const senha=document.getElementById('senha').value;

const resposta= await fetch(rota,'/login',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'

    },
    body:JSON.stringify({
        email,senha
    }),

});
    const resultado= await response.text();
 if(response.ok){
    window.location.href='/home.html';
 }else{
    alert('deu ruim parceiro kkk')
 }



});
