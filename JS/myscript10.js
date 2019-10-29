class Pessoa {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    idade() {
        var today = new Date();
        let idade = today.getFullYear()-this.ano;
        let m = today.getMonth() + 1;
        if(m < this.mes || (m== this.mes && today.getDate() < this.dia)){
            idade -= 1;
        }
        return idade;
    }
}
function func() {
    let d = document.getElementById("nasc").value;
    let dd = d.split("/");
    let p = new Pessoa(dd[0], dd[1], dd[2]);
    document.getElementById("idade").innerHTML = p.idade() + " anos";
}