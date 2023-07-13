 //Pide la edad y si es mayor de 18 años indica que ya puede conducir./
 var edad = prompt("Ingrese su edad:");

if (edad >= 18) {
  console.log("Ya puedes conducir");
} else {
  console.log("Aún no puedes conducir");
}
//Pide una nota (número). Muestra la calificación según la nota
var nota = parseFloat(prompt("Ingrese la nota:"));

if (nota >= 0 && nota < 3) {
  console.log("Muy deficiente");
} else if (nota >= 3 && nota < 5) {
  console.log("Insuficiente");
} else if (nota >= 5 && nota < 6) {
  console.log("Suficiente");
} else if (nota >= 6 && nota < 7) {
  console.log("Bien");
} else if (nota >= 7 && nota < 9) {
  console.log("Notable");
} else if (nota >= 9 && nota <= 10) {
  console.log("Sobresaliente");
} else {
  console.log("Nota inválida");
}

/*Realiza un script que pida cadenas de texto hasta que se pulse "cancelar". 
Al salir con "cancelar" deben mostrarse todas las cadenas concatenadas con un guion "-".*/
var cadenas = [];

while (true) {
  var cadena = prompt("Ingrese una cadena de texto (Cancelar para salir):");

  if (cadena === null) {
    break;
  }

  cadenas.push(cadena);
}

var resultado = cadenas.join("-");
console.log(resultado);

/*Realizar una página con un script que calcule el valor de la letra de un número de DNI 
(Documento Nacional de Identidad).*/
while (true) {
    var numeroDNI = prompt("Ingrese el número de DNI:");
  
    if (numeroDNI === null) {
      break;
    }
  
    if (!isNaN(numeroDNI) && numeroDNI >= 0 && numeroDNI <= 99999999) {
      var letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
      var resto = numeroDNI % 23;
      var letra = letrasDNI.charAt(resto);
  
      console.log("La letra del DNI", numeroDNI, "es:", letra);
    } else {
      alert("Número de DNI inválido. Inténtelo nuevamente.");
    }
  }
  