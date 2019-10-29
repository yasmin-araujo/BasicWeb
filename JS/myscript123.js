<function func()
{
    let cont = document.getElementById("par").innerHTML;
    document.body.innerHTML += cont;
}

function clique()
{
    //alert("amei, nota 0");
    if(document.body.style.backgroundColor == "pink")
        document.body.style.backgroundColor = "lightblue";
    else
        document.body.style.backgroundColor = "pink";
}

function cont()
{
    let cnt = document.getElementById("contador").value;
    cnt++;
    if(cnt > 10)
    {
        alert("Limite máximo atingido");
        cnt = 0;
    }  
    document.getElementById("contador").value = cnt;
}