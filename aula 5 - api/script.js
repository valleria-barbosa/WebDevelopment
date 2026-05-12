const listarProdutos = async () => {
    const response = await fetch('https://6a03b3be2afe8349b4b56f8f.mockapi.io/users');
    
    const produtos = await response.json();

    const ul = document.getElementById('lista-produtos');
    ul.innerHTML = "";

    produtos.forEach(p => {
        const li = document.createElement("li");
        li.innerHTML=`
        <p${p.id}></p$>
        <img src="${p.image}" width="50">
        strong${p.name}</strong> - R$${p.price} <em>(${p.seller})</em>
        `;
        ul.appendChild(li);
    });
}

listarProdutos();

//await - espere, execute primeiro