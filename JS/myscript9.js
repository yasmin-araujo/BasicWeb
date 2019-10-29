function func()
{
    let s = document.getElementById("insere").value;
    // alert(s);
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length; j >= 0; j--) {
            document.getElementById("lista").innerHTML += " " + s.slice(i, j);
        }
    }
}