const formulario =document.getElementById('form');

formulario.addEventListener('submit',()=>{





});
/* const form = document.getElementById('loginForm'); 
const msg = document.getElementById('msg');
 form.addEventListener('submit', async (e) => { e.preventDefault(); // evita recarregar a página const email = document.getElementById('email').value; const password = document.getElementById('password').value; // envia dados para o backend const response = await fetch('/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) }); const result = await response.text(); if (response.ok) { // login deu certo window.location.href = '/dashboard.html'; } else { // erro no login msg.textContent = result; } }); */