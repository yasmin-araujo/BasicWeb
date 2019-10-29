let vetorzinho = [];

function add()
{
    let a = document.getElementById("cont").value;
    vetorzinho.push(a);
    document.getElementById("cont").value = "";
}

function display()
{
    for(let i = 0; i < vetorzinho.length; i++)
        document.getElementById("show").innerHTML += vetorzinho[i] + "<br>";
}