const { response } = require("express");

const form=document.getElementById('tabela-registro');

form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const nome=document.getElementById('pNome').value;
    const email=document.getElementById('pEmail').value;
    const senha=document.getElementById('pSenha').value;

const response=await fetch('http://localhost:3000/register',{

      method:'POST',
    headers:{
        'Content-Type':'application/json'

    },
    body:JSON.stringify({
        nome,email,senha
    }),
});    


})