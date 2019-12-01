const button = document.createElement("button");
button.innerHTML = "Click me!";

document.body.appendChild(button);

button.addEventListener("click", geyfunction);

function geyfunction(){
    document.body.style.backgroundImage = "url(https://i.ytimg.com/vi/picnJ7vbWZ4/maxresdefault.jpg)"
    alert("TecNOe-doc is gey!");
}