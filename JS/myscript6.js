let srcs = [
    "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png",
    "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png",
    "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png"
]

let index = 1;

function move() {
    // setInterval(change(), 100);
    setInterval(function(){change();}, 400);     
}

function change() {
    console.log(index);
    document.getElementById("image").src = srcs[index];
    index = (index + 1) % srcs.length;
}