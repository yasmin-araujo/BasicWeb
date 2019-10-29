let cnt = 0;

function serv()
{
    try
    {
        cnt++;
        fetch("https://jsonplaceholder.typicode.com/photos/" + cnt)
            .then(function(response){if(response.status != 200)  throw "Erro"; return response.json();})
            .then(json => {
                document.getElementById("image").src = json.url;
            })
    }
    catch(err)
    {
        alert(err);
    }
}