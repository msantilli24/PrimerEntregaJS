////Ejemplo carrito para preentrega

/**
 * Hacer el cierre de un ticket
 * nos planteamos la idea de que vamos cargando cada precio del item y cantidad en un prompt
 * esto se hace hasta que el usuario no quiera ingresar mas items
 * se calcula el total y se muestra en un alert
 */

let precioItem;
let cantidad;
let total=0; ///acumulador
let seguir;
let nombreUser;

nombreUser = prompt(" ingrese su nombre");

do
{
   do {       
        precioItem = parseFloat(prompt("Ingrese el precio del item"));
        if (precioItem <=0)
        {
            alert("Precio invalido!");
        }

    }while (precioItem <= 0);

    cantidad = parseInt(prompt("Ingrese su cantidad"));
    while (cantidad <= 0)
    {
        cantidad = parseInt(prompt("cantidad invalida, vuelva a ingresarla"));
    }

    total = total + precioItem*cantidad;
    seguir = prompt("Desea ingresar otro item? s/n");

}while(seguir == 's');

alert(`El total para ${nombre} es: ${total}`);



