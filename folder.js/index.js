

// //     document.getElementById('cuerpoForm')
// //   	document.getElementById('inputCapital')
// //   	document.getElementById('inputDescuento')
// //   	boton = document.getElementById('agregar')
// //     console.log(boton)
// //     console.log()
  
// // function extraertotal(){
// // 	let capital = inputCapital.value;
// // 	let gastos = inputDescuento.value;
// // 	resultado = capital - gastos;
// // 	document.getElementById('caja').innerHTML = "Sueldo Mes:" + capital
// // 	document.getElementById('caja2').innerHTML = "Gastos Mes:" + gastos
// // 	document.getElementById('caja3').innerHTML = "Lo que queda del mes:" + resultado
	
// // 	 document.getElementById('cuerpoForm').reset();

// // }



// // extraertotal()

// // boton.addEventListener("click", extraertotal)





// let cuerpoDelFormulario = document.getElementById('cuerpoForm')
// let inputDelSueldo = document.getElementById('inputCapital')
// let inputDelGasto = document.getElementById('inputDescuento')
// let botonDarClic = document.getElementById('agregar')


//  const PRECIO_MINIMO = 0
// function extraer(){
//  miSueldo = inputDelSueldo.value
//  misGastos = inputDelGasto.value
// let resultado =  miSueldo - misGastos
// console.log( miSueldo) 
// console.log(misGastos)


	
// console.log(resultado)
// if(miSueldo < misGastos){
// 	document.getElementById("caja").style.color = "#841313"
// document.getElementById('caja3').innerHTML = "menos:" + resultado
	
// }else{
// 	// return false
// document.getElementById('caja3').innerHTML = "Me queda:" + resultado
// document.getElementById("caja3").style.color = "#258413"	
// }

// document.getElementById('caja').innerHTML = "Sueldo Mes:" +  miSueldo
// document.getElementById('caja2').innerHTML = "Gastos Mes:" + misGastos

// document.getElementById('cuerpoForm').reset();	
// }
// // extraer()
// botonDarClic.addEventListener("click", extraer)




let cuerpoDelFormulario = document.getElementById('cuerpoForm')
let inputDelSueldo = document.getElementById('inputCapital')
let inputDelGasto = document.getElementById('inputDescuento')
let botonDarClic = document.getElementById('agregar')


 const PRECIO_MINIMO = 0
function extraer(){
 miSueldo = inputDelSueldo.value
 misGastos = inputDelGasto.value
let resultado =  miSueldo - misGastos
console.log( miSueldo) 
console.log(misGastos)


	
console.log(resultado)
if(miSueldo < misGastos){
	document.getElementById("caja").style.background = "#841313"

	document.getElementById('caja').innerHTML = "Sueldo Mes:" +  miSueldo
document.getElementById('caja3').innerHTML = "menos:" + resultado
	
}else{
	// return false
document.getElementById('caja3').innerHTML = "Me queda:" + resultado
document.getElementById("caja3").style.background = "#258413"	
document.getElementById("caja3").style.color = "#ffff"	
}

document.getElementById('caja').innerHTML = "Sueldo Mes:" +  miSueldo
document.getElementById('caja2').innerHTML = "Gastos Mes:" + misGastos

document.getElementById('cuerpoForm').reset();	
}
extraer()
function aviso(){
	if(inputDelSueldo){
		inputDelSueldo.setAttribute("placeholder", "Solo numero");
            inputDelSueldo.style.color = "#258413";
         
            return false;
	}


}
function aviso2(){
	if(inputDelGasto){
		inputDelGasto.setAttribute("placeholder", "Solo numero");
          
            return false;
	}

}
// aviso()
botonDarClic.addEventListener("click", extraer)
inputDelSueldo.addEventListener('click', aviso)
inputDelGasto.addEventListener('click', aviso2)



