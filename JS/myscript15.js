let txt = () => {
    
    let p = document.getElementById("paragrafo");
    let t = document.getElementById("texto").value;
    p.innerHTML = t;
}

let cor = color => {
    let p = document.getElementById("paragrafo");
    p.style.color = color;
}