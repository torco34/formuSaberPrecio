// let container = document.getElementById('container');

// // en esta estructura es donde va agregar el capital
// let agregarCapital = document.getElementById('agregar-capital')

// // estructura de descuento
// let agregarGastos= document.getElementById('agregar-gasto');

// // estructura de el boton
// let botonAgregar = document.getElementById('agregar')

// // esta estructura es donde van las li
// let resultadoDelAgregos = document.getElementById('resultadoDelAgregos')

// // console.log(container)
// // console.log(agregarCapital)
// // console.log(agregarGastos)
// // console.log(resultadoDelAgregos);
// // console.log(botonAgregar);
 

//  function capital(){
//  	let resultadoDelAgregos, botonAgregar,  agregarGastos, agregarCapital
 	
//    if(resultadoDelAgregos === "" > agregarGastos){
//    	alert('hola')
//    }

 
//  };

 

//  function boton(){
//  	let agregar = agregarCapital.value;
//     sueldo = document.createElement('li')
//     enlace = document.createElement('a')
//      contenido = document.createTextNode(agregar);
   
//    if(agregar === "" ){
//    	agregarCapital.setAttribute("placeholder", 'precio inbalido');
//      agregarCapital.className = 'error';
//      return false

//    }
//     // Agregamos el contenido al enlace
//    enlace.appendChild(contenido);

//    // le establesemos un atributo href
//         enlace.setAttribute('href', '#');


//          // Agregamos el enlace (a) a la nueva tare (li)
//         agregarCapital.appendChild(enlace);

//         // agregamos nueva tarea ala lista
//        resultadoDelAgregos.appendChild( enlace);

//         agregarCapital.value = ""
//  };


  
//  // este es el inpu donde va el capital
    
// agregarCapital.addEventListener('click', capital);

//  // parte donde va el boton
// botonAgregar.addEventListener('click', boton);


let descuentoIngresado = document.getElementById('descuentoInput')
let sueldoFijo = document.getElementById('sueldoFijo')
boton = document.getElementById('agregar')


console.log( descuentoIngresado)
console.log(boton)

let agregarCapital = function(){
   let sueldo = sueldoFijo;
 	let gasto = descuentoIngresado.value;
 	let resta = sueldo - gasto;
 	
 	document.getElementById("sueldo").innerHTML = ""+resta+""

}

boton.addEventListener('click', agregarCapital)


