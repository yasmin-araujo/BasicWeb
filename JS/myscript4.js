function calc()
{
    let op = document.getElementById("Operacao").value;
    let res = parseFloat(document.getElementById("Prim").value);
    let seg = parseFloat(document.getElementById("Seg").value);    

    switch(op)
    {
        case "+":
            res += seg;
            break;
        case "-":
            res -= seg;
            break;
        case "*":
            res *= seg;
            break;
        case "/":
            res /= seg;
            break;
    }
    document.getElementById("Res").innerHTML = "O resultado é " + res;
}