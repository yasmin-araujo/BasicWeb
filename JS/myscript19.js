function validatenum(num)
{
    let elem, ind;
    if(num == 1)
    {
        elem = document.getElementById("Prim");
    }
    else
    {
        elem = document.getElementById("Seg");
    }

    if(document.activeElement == elem)
    {
        let valor_ini;
        try
        {
            valor_ini = elem.value;
            if(valor_ini != "")
            {
                valor = parseFloat(valor_ini);
                if (isNaN(valor)) throw "Digite um número válido !";    
                else if (valor.toString().length != elem.value.length) throw "Digite um número válido !";
            }
        }
        catch(err)
        {
            alert(err);
        }

    }
}

function validateop()
{
    let op = document.getElementById("Operacao").value;
    try
    {
        if(op != "+" && op != "-" && op != "*" && op != "/" && op != "") throw "Digite uma operação válida !";
    }
    catch(err)
    {
        alert(err);
    }
}

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