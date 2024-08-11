const body = document.getElementsByTagName("body")[0]
body.style.backgroundColor = "red"

function setColor(name) {
    body.style.backgroundColor = name;
}

setColor("green")
