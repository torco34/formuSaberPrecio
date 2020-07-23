let cajaContador = document.getElementById('caja');
let gastosInput = document.getElementById('gastos')
let boton = document.getElementById('button')
let parrafo = document.getElementById('sueldo');
contador = 0;


console.log(cajaContador)
console.log(gastosInput)
console.log(boton)
console.log(parrafo)

 let agregargastos = function(){

 	let sueldo = 9999;
 	let gasto = gastosInput.value;
 	let resta = sueldo - gasto;
 	
 	document.getElementById("sueldo").innerHTML = "sueldo:"+resta+""
    
    if(sueldo > gasto){
    	document.getElementById('caja').style.background="#a4d452"; 
    	
     	
    
 }else {
 	document.getElementById('caja').style.background="#d80707";
 }

 


 // let comprobarvalor = function(){
 // 	alert('no senor aqui estoy')
 // }
    }


// caja.addEventListener('click', cambiarColor)
boton.addEventListener('click', agregargastos)
// gastosInput.addEventListener('click', comprobarvalor)







// (function(){
// 	const caja = document.getElementById('caja')
//   let  cantiGastad = document.getElementById('cantiGastad')
//    let  button = document.getElementById('button');
//    contador = 0

//  console.log(cantiGastad)
//  console.log(caja)
//  console.log(button)

//   let agregarGasto = function(){
//   	const sueldo = document.getElementById('caja')
//   }
//    let comprovarGasto = function(){}
//    function extraerCatidad(){}

//    // argregar tarea
//    cantiGastad.addEventListener('click', agregarGasto);
//    caja.addEventListener('click', comprovarGasto);
// }())  



    

 


//  let btn = document.getElementById('boton')
//   caja = document.getElementById('caja')
//  contador = 0;
// // console.log(caja )
//  function colore()
//  {
//  	if(contador==0)
//  	{
//  		caja.classList.add('yellow');
//  		// esta parte la solucione sola
//  		 // hice que devulvieraa caja
//  	    contador = 'caja'

//  	} 
//  	else{
//  		caja.classList.remove('yellow');
//  		contador=0;
 		
//  	}
//  }

 

// btn.addEventListener('click', colore ,true);


//  let miFoto = "rayo";

//  function boton(){
//  let imagen = document.getElementById('foto');
//  	if(miFoto == "rayo"){
//  		imagen.src = "./img/nue.png";
//  		miFoto = "nue"
//  	}else{
//  		imagen.src = "./img/rayo.jpg";
//  		miFoto = "rayo"
 		
//  	}
//  };

// let nombre = document.getElementById('nombre')
// console.log('nombre')