
 document.getElementById('cuerpoForm')
  	document.getElementById('inputCapital')
  	document.getElementById('inputDescuento')
  	boton = document.getElementById('agregar')
    console.log(boton)
     console.log()
  
function extraertotal(){
	let capital = inputCapital.value;
	let gastos = inputDescuento.value;
	resultado = capital - gastos
	document.getElementById('caja').innerHTML = "Sueldo Mes:" + capital
	document.getElementById('caja2').innerHTML = "Gastos Mes:" + gastos
	document.getElementById('caja3').innerHTML = "Lo que queda del mes:" + resultado
	 document.getElementById('cuerpoForm').reset();
}



extraertotal()

boton.addEventListener("click", extraertotal)



