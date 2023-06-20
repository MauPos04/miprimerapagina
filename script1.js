function showAlert() { alert('¡Hola, esta es una alerta desde JavaScript!');}




//Obetenemos el boton por su id
let boton = document.getElementById("miBoton");

//Añadimos un oyente de eventos que "escuche el evento de clicl"

// boton.addEventListener("click", function(){
//     alert("¡Haz hecho clic en el botón!");
// });

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})