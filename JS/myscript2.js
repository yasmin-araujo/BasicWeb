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