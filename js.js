alert("Para ingresar debes ser mayor de edad");
var edad=parseInt(prompt("ingrese edad"));
if(edad>=18)
{
alert("Puedes ingresar, eres mayor");
}else{
    alert("Entras bajo tu responsabilidad");
}



alert("Si vives lejos te damos un bono de descuento para compensar el viaje");
var km=parseInt(prompt("¿A cuantos km vives?"));
if(km>=5)
{
alert("No olvides descargar el bono de descuento");
}else{
    alert("No aplicas a esta promo");
}
