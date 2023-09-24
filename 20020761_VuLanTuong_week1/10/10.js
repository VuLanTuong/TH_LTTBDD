const el = document.getElementById("btn");
if (el) {
    console.log("Button not null");
    el.addEventListener("click", (event) => {
        event.preventDefault();
        gameRest();

    });
} else {
    console.log("Button is null");
}

function gameRest() {

    document.getElementById("score").innerHTML = "0";
    document.getElementById("secretNumber").innerHTML = "0";
    document.getElementById("message").innerHTML = "";
    document.getElementById("number").innerHTML = "0";
    document.body.style.backgroundColor = "#222";
    document.body.style.width = "15rem";



}