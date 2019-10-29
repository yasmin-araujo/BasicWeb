class Cachorro {
    constructor(n, i, p, c) {
        this.nome = n;
        this.idade = i;
        this.porte = p;
        this.cor = c;
    }
}

let lista = [];

function func() {
    document.getElementById("lista").innerHTML = "";
    let i = document.getElementById("idade").value;
    let n = document.getElementById("nome").value;
    let p = document.getElementById("porte").value;
    let c = document.getElementById("cor").value;
    let cr = new Cachorro(n,i,p,c);
    lista.push(cr);
    lista.forEach(element => {
        document.getElementById("lista").innerHTML += element.nome + " | " + element.idade + " | " + element.porte + " | " + element.cor + "<br>";
    });
}