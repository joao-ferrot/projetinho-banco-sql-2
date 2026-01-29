
const api = "http://localhost:3000/dashboard";

async function informaçoes(){
    const res=await fetch(api);
    const dados= await res.json();




    const tabela=document.getElementById('tabela-home');


    dados.forEach(e => {
        tabela.innerHTML=`
         <tr>
            <td>${a.id}</td>
            <td>${a.nome}</td>
            <td>${a.email}</td>
            <td>${a.senha}</td>
            <td>
         <tr>   
        `
    });

}



informaçoes();
