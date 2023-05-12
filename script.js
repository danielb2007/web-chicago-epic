//var nombre = "Daniel"
/* var nombre = "Daniel"
var */
var nombre = "Daniel"
var apellido = "Bonilla"
var x=2
var y=5
alert (nombre + " " + apellido)
var elementoInformacion = document.getElementById("informaaa")
//elementoInformacion.innerText = "Texto de JavaScript CCC"
//elementoInformacion.innerText = nombre
//elementoInformacion.innerText = nombre + " " + apellido
//elementoInformacion.innerText = x+y
//elementoInformacion.innerText = Sum()
//elementoInformacion.innerText = Sum(numero1, numero2)
elementoInformacion.innerText = Sumar(x,y)


//Como crear una funcion propia
/*function Sum()
{
  var numero1=10
  var numero2=20
  var resultado = numero1+numero2
  //return "pepito"
}*/
function Sumar(x,y)
{
  var resultado = x+y 
  return resultado
}
