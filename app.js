// este sirve para ejecutar el js despues de que todo el html se haya descargado.
document.addEventListener("DOMContentLoaded", function() {

    //Objeto donde irán los datos

    const email = {
        email: "",
        asunto:"",
        mensaje:""
    }

    //Seleccionar los elementos de la interfaz

    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector("#spinner");


    // Asignar eventos, blur funciona para decirte cuando te has cambiado de input

    //inputEmail.addEventListener("blur", function(e) {
     //   console.log(e.target.value);
    //});

    //inputAsunto.addEventListener("blur", function(e) {
     //   console.log(e.target.value);
    //});

    //inputMensaje.addEventListener("blur", function(e) {
    //    console.log(e.target.value);
    //});

    // Codigo más eficiente para hacer lo de arriba

    inputEmail.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur",validar);
    inputMensaje.addEventListener("blur", validar);

    formulario.addEventListener("submit", enviarEmail);
    

    btnReset.addEventListener("click", function(e){
        e.preventDefault();

        //reiniciar el objeto
        email.email="";
        asunto.asunto="";
        mensaje.mensaje="";

        formulario.reset();
        comprobarEmail();
    })

    function enviarEmail(e){
        e.preventDefault();

        spinner.classList.add("flex");
        spinner.classList.remove("hidden");
    }
    
    // trim te ayuda a eliminar los espacios en blanco, es decir si hay espacios en los datos que ingresa el usuario este no los tomara como caracteres
    // Función para validar que se haya escrito en los inputs

    function validar(e){

        if(e.target.value.trim() === ""){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.id] ="";
            comprobarEmail();
            return;
        }

        if (e.target.id === `email` && !validarEmail(e.target.value)) {
            mostrarAlerta(`El email no es válido`, e.target.parentElement);
            email[e.target.id]="";
            comprobarEmail();
            return;
        };

        limpiarAlerta(e.target.parentElement);

        //Asiganr los valores para el objeto

        email[e.target.id] = e.target.value.trim().toLowerCase();
        console.log(email);

        // comprobar el objeto de mail
        comprobarEmail();
    }

    // referencia es el segundo parametro que toma la función, este nos funciona aqui para que la alerta salga abaja de cada input. Para esto tuve que colocar cada input dentro de un div para que este fuera el elemento padre
    function mostrarAlerta(mensaje, referencia){
        // para que solo salga una vez la alerta y no la borra hasta que se solucione
        const alerta = referencia.querySelector("p");
        if(alerta) {
            alerta.remove();
        }

        // Vamos a generar la alerta en HTML para que se pueda visualizar en la aplicación
        // primero creamos la variable y el mensaje que tendrá
        const error = document.createElement("p");
        error.textContent = mensaje;
        // ahora vamos a hacer que se vea en la pantalla
        // Con appendChild le estamos agregando un elemento hijo a Formulario
        // innerhtml no se recomienda usar porque es inseguro
        referencia.appendChild(error)
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector("p");
        if(alerta) {
            alerta.remove();
        }
    }

    // para validar un email

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }

    // object.values nos muestra los datos que el usuario ingresa y los convierte en un arreglo, al ser un arreglo podemos usar los metodos de los arreglos, entonces usamos Includes, includes nos ayuda a verificar que exista algun string vacío y de ser falso podemos habilitar el botón de enviar ;)
    function comprobarEmail() {

    Object.values(email).includes("");
        
    }
});

