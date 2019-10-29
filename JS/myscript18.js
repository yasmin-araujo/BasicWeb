let nomes = [];

function formulario() {
    adicionarNome(document.getElementById("texto").value, imprimirNome);
    // imprimirNome();
}

function adicionarNome(nome, callback){
    setTimeout(() => {
        nomes.push(nome);
        callback();
    }, 1010);
}

function imprimirNome(){
    setTimeout(() => {
        document.getElementById("lista").innerHTML = "";
        nomes.forEach(e => {
            document.getElementById("lista").innerHTML += e + "<br>";
        });
    }, 1000);
}