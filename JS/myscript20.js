function serv()
{
    try
    {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(function(response){if(response.status != 200)  throw "Erro"; return response.json();})
            .then(json => console.log(json))
    }
    catch(err)
    {
        alert(err);
    }
}