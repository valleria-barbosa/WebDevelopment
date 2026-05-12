document.getElementById("btn-buscar").onclick = async () => {
    const username = document.getElementById("input-usuario").value.trim()
    //trim serve para ignorar espaços
    const info = document.getElementById("info-usuario")

    if(!username){
     //se username não estiver prenchido
     info.innerHTML = "<span class=\"test-danger\">Digite um usuário! </span>"
     return   
    }

    info.innerHTML = "Carregando..."
    const response = await fetch(`https://api.github.com/users/${username}`)

   
    
    const data = await response.json()

    info.innerHTML = `
    <p><strong>Nome:</strong>${data.name||"(sem nome)"} </p>
    <img src="${data.avatar_url}" width="50" />
    <p><strong>Repositório públicos</strong></p>${data.public_repos}</p>
    `
}