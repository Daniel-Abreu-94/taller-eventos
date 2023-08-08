const divClickArea = document.getElementById("buttonContainer");
divClickArea.addEventListener("click", function(event) {
    alert("Hola! Soy el div");
    event.stopPropagation();
});
