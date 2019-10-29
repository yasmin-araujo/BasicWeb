class Rectangle {
    constructor (alt, lar, cor, x, y) {
        this.altura = alt;
        this.largura = lar;
        this.cor = cor;
        this.x = x;
        this.y = y;
    }

    desenha() {
        return ("<div style='height: "+ this.altura +"px; width: "+ this.largura +"px; background-color: " + this.cor + "; position: absolute; top: " + this.y + "px; left: " + this.x + "px;'>" + "</div>");
    }
}

let lista = [];

function func() {
    document.getElementById("ret").innerHTML = "";
    let a = document.getElementById("alt").value;
    let l = document.getElementById("lar").value;
    let c = document.getElementById("cor").value;
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let r = new Rectangle(a, l ,c, x, y);
    lista.push(r);
    lista.forEach(e => {
        document.getElementById("ret").innerHTML += e.desenha();
    });
}