function calc()
{
    let a = document.getElementById("alt").value;
    let r = document.getElementById("raio").value;
    let res = Math.PI * r * r * a;
    document.getElementById("show").innerHTML = "O volume é " + res;
}