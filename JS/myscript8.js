let tudo = [];

function func()
{
    let n = document.getElementById("nome").value;
    let i = document.getElementById("idade").value;
    let p = document.getElementById("peso").value;
    add(n, i, p);
    document.getElementById("nome").value = '';
    document.getElementById("idade").value = '';
    document.getElementById("peso").value = '';
}

function add(n, i, p)
{
    let pessoa = {
        nome: n,
        idade: i,
        peso: p,
        bio: function(){
            return(this.nome + ' ' + this.idade + ' ' + this.peso);
        }
    };
    tudo.push(pessoa);
    alert(pessoa.bio());
}

function show()
{
    document.getElementById("lista").innerHTML = 'Lista de pessoas <br><br>';
    tudo.forEach(element => {
        document.getElementById("lista").innerHTML += element.bio();
        document.getElementById("lista").innerHTML += '<br>';
    });
}

function rel()
{
    let cnt = 0;
    document.getElementById("relatorio").innerHTML = '<br><br>Lista de pessoas com mais de 42 anos <br><br>';
    tudo.forEach(element => {
        if(element.idade > 42)
            cnt ++;
            // document.getElementById("relatorio").innerHTML += element.bio() + '<br>';
    });
    document.getElementById("relatorio").innerHTML += cnt +'<br><br><br>';

    cnt = 0;
    document.getElementById("relatorio").innerHTML += 'Lista de pessoas com menos de 18 anos <br><br>';
    tudo.forEach(element => {
        if(element.idade < 18)
            cnt++;
            // document.getElementById("relatorio").innerHTML += element.bio() + '<br>';
    });
    document.getElementById("relatorio").innerHTML += cnt +'<br><br><br>';

    cnt = 0;
    document.getElementById("relatorio").innerHTML += 'Lista de pessoas com menos de 50 kg <br><br>';
    tudo.forEach(element => {
        if(element.peso < 50)
            cnt++;
            // document.getElementById("relatorio").innerHTML += element.bio() + '<br>';
    });
    document.getElementById("relatorio").innerHTML += cnt +'<br><br><br>';
}