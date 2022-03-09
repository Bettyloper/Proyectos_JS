var estadoLicuadora ="apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada"){
        estadoLicuadora = "encendida";
        hacerBrrr(); // la función se tiene que declarar acá que es donde se va a ocupar el sonido
        licuadora.classList.add("active"); // agregar la clase
        /*console.log("me prendiste");*/
    } else {
        estadoLicuadora = "apagada"
        hacerBrrr(); // también aca se pone, asi cuando lleguemos a esta linea entraremos a la función y verá que se aplica el else
        licuadora.classList.remove("active"); // remover la clase
        /*console.log("me apagaste"); se usó para saber si en un principio funcionaban las funciones*/
    }
}

function hacerBrrr() {
    if(sonidoLicuadora.paused ) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0; // sin esta indicación la musica iniciaria en el segundo donde lo para la ultima vez

    }
}