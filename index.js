//User profile

/*let username = prompt('Nombre de usuario:');
console.log(username);

let age = prompt('¿Cuál es tu edad?');
console.log(age);

let movies = prompt('¿Cuál es tu película favorita?Escribe el nombre separado por comas');
let arrayFilms = movies.split(",");
console.log(arrayFilms)

console.log(`The film ${arrayFilms[1]} is one of my favorites`);*/




// Highest number

/*let arrayIngresado=[];

for (let i=0; i < 10; i++){
    let numeros = parseInt(prompt("Ingrese 10 numeros"));
    let pushNumeros = arrayIngresado.push(numeros);  
}

let posicionMayor=0;
for (let i=1; i < arrayIngresado.length; i++){
    if (arrayIngresado[i]>arrayIngresado[posicionMayor]) {
        posicionMayor=i;}
    }

console.log(arrayIngresado[posicionMayor]);*/



//Alarm
//setTimeOut sintaxis: setTimeout(function, millisegundos);

/*let tiempoAlarma = parseInt(prompt("Ingrese en cuanto tiempo quiere que suene la alarma (en segundos): "));

let tiempoEnMiliseg = tiempoAlarma*1000; //1 sec = 1000 millisegundos

function mensajeAlarma() {
    console.log(`Alarma: ya pasaron ${tiempoAlarma} segundos`);
}

let alarma = setTimeout(mensajeAlarma, tiempoEnMiliseg);*/
