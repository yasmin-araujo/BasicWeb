let nomes = [];

function formulario() {
    adicionarNome(document.getElementById("texto").value);
    imprimirNome();
}

function adicionarNome(nome){
    setTimeout(() => {
        nomes.push(nome);
    }, 1000);
}

function imprimirNome(){
    setTimeout(() => {
        document.getElementById("lista").innerHTML = "";
        nomes.forEach(e => {
            document.getElementById("lista").innerHTML += e + "<br>";
        });
    }, 1000);
}