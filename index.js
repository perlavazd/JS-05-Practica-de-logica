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



//Palindromo

/*let textoIngresado = prompt('Escriba una frase o palabra');

let sepArray=textoIngresado.split(''); //Para separar en elementos el texto ingresado.
console.log(textoIngresado);

for (let i=sepArray.length-1; i>=0; i--){
    if (sepArray[i]==" " || sepArray[i]=="," || sepArray[i]=="." || sepArray[i]==";" || sepArray[i]==":" || sepArray[i]=="!" || sepArray[i]=="¡" || sepArray[i]=="¿" || sepArray[i]=="?" || sepArray[i]=="-" || sepArray[i]=="_" || sepArray[i]=="(" || sepArray[i]==")" || sepArray[i]=="[" || sepArray[i]=="]"){
        let elementoEliminado=sepArray.splice(i,1);
    }  

}

let nuevoArrayUnido=sepArray.join(''); //Aquí une los elementos como una cadena
console.log(nuevoArrayUnido)

let arrayMinusculas=nuevoArrayUnido.toLowerCase();

let sepArrayNuevo=arrayMinusculas.split(''); //Para separar en elementos en cadena a elementos.
console.log(sepArrayNuevo);

let arrayPalindromo= sepArrayNuevo.reverse();//Para iniciar al revez el array
console.log(arrayPalindromo);

for (let i=0; i<arrayPalindromo.length; i++){ 
    if(arrayPalindromo[i] !== sepArrayNuevo[i]){
        console.log("No es un palindromo")
    }else{
        console.log(`La frase/palabra "${textoIngresado}" es un palindromo`)
    }
        
}*/



//FACTORIAL

/*function fac (n,monto) { //monto es donde "guardaré" el valor nuevo
    n=n-1;
    if (n==0){
        return 1;
    }else if (n>1){
        monto=monto*n;
        return fac(n,monto);
    }else if (n==1){
        return monto*1;
    }       
}

console.log(fac(5,5));*/

//Flat array

function matriz(multiDimension){

    let resultadoMatriz=[]; //Matriz aplanada
    
    for (let i=0; i<multiDimension.length; i++) {
        if (Array.isArray(multiDimension[i])){  //Array.isArray para saber si es un array el valor pasado.
            resultadoMatriz=resultadoMatriz.concat(matriz(multiDimension[i])); //Se utiliza para fusionar dos o más matrices.
        }else{
            let elemento=resultadoMatriz.push(multiDimension[i]); //Sino es un array agrega el elemento a la matriz aplanada.
        }
    }
    return resultadoMatriz;

}


let multiDimension = [1, [2, 3, [4, 5, [6]]]]; 
console.log(matriz(multiDimension))
