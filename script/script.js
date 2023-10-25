
const texto = document.getElementById('texto')
const mostrar = "";//f para mostrar resultado
let texto2 = "ganó";
let cambio = false
function verresul() {
    if (cambio) {
        texto.innerHTML = mostrar;
        cambio = false
    }else{
      texto.innerHTML = texto2;
      cambio = true
    }
};

 
 
 
 // fecha actual
const fechaActual = new Date();

 // fecha partido vs argentinos(29 de octubre)
const fechaNavidad = new Date(fechaActual.getFullYear(), 9, 29);


 // Calcula la diferencia de tiempo en milisegundos
 let tiempoRestante = fechaNavidad - fechaActual;

 // sacar la diferencia de tiempo a días, horas, minutos y segundos
 let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
 let horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 let minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
 let segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

 // Cuenta regresiva lista para mostrar 
 let cuentaRegresivaElement = document.getElementById("cuentaRegresiva");
 cuentaRegresivaElement.innerHTML = dias + " días, " + horas + " horas, " + minutos + " minutos, ";







