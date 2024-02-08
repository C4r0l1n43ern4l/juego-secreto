//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

//Funciòn para cambiar un elemento del HTML
//Declaramos las variables las cuales se inicializan en la función condiciones iniciales
let numeroSecreto = 0;
let intentos = 0; // Contador de intentos
let listaNumerosSorteados = []; //Declaramos una lista vacia
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){  //La funcion recibe parámetros (elemento, texto)
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    if (numeroDeUsuario === numeroSecreto){
         //Reutilizamos una función para emitir un mensaje se puede usas Templates String y Operador ternario
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja(); //Llamamos a la función para limpiar la caja
    }
    return;
}

//Función para limpiar la caja
function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}

//Función para generar un número aleatorio
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1; 
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todo los número posibles');
    } else{
        // Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {  //El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
            return generarNumeroSecreto(); //Genera un nuevo número [recursividad del código]
        } else{
            listaNumerosSorteados.push(numeroGenerado); //Agrega el número a la lista
            return numeroGenerado; //Retorna el numer generado
        }
    }  
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto'); // Llamamos a la función y le pasamos los parámetros que solicita
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); //Generar Número aleatorio
    intentos = 1; //Inicializar el número de intentor
}

//Función para reiniciar Juego
function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de inicio
    //Generar Número aleatorio
    //Inicializar el número de intentor
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

