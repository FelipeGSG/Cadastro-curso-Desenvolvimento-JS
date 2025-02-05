function ichHabeProblem(){
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value

    if(usuario == "" || senha == ""){
        return
    }

    fetch("http://localhost:3000/cadastros", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({usuario: usuario, senha: senha})
    }).then(response =>{
        if(!response.ok){
            throw new Error()
        }
        return response.json()
    }).then(() =>{
        alert("Dados enviados com sucesso")
    }).catch(() =>{
        alert("Não foi possível conectar ao servidor")
    })
}

