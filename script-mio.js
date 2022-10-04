
const user="matias";
const pass="1234";
let log=false;
let registrado=false;

let finalizar=false;
let exit=false;
let compra="";
let item="";
let codigo=0;
let precio=0;
let cantidad=0;
let parcial=0;
let costoenvio=0;
let total=0;

/*defino las funciones a utilizar*/

function validacion(){
    for ( var i=0; i<3; i++){
        let usuario=prompt("ingrese su usuario");
        let contrasena=prompt("ingrese su contraseña");
        if((usuario===user) && (contrasena===pass)){
            alert("Bienvenido: "+user)
            log=true;
            i=3;
        }else{
            if(i===2){
                alert("usted alcanzo el numero maximo de intentos, por favor contacte con soporte tecnico")
            }else{
                alert("el usuario es incorrecto, ingrese nuevamente")
                log=false;
            } 
        }
    }
}

function selecProd(){
    codigo=prompt("Ingrese el codigo del producto");
    if((codigo>0) && (codigo<=12)){
        switch(codigo){
            case "1":   item="conjuntos" ;
                        precio=6500;
                        subTotal(precio);
                        break;
            case "2":   item="remeras";
                        precio=3500;
                        subTotal(precio);
                        break;
            case "3":   item="zapatilla";
                        precio=15000;
                        subTotal(precio);
                        break;
            case "4":   item="guantes";
                        precio=1500;
                        subTotal(precio);
                        break;
            case "5":   item="barras";
                        precio=12000;
                        subTotal(precio);
                        break;
            case "6":   item="discos";
                        precio=7500;
                        subTotal(precio);
                        break;
            case "7":   item="mancuernas";
                        precio=6500;
                        subTotal(precio);
                        break;
            case "8":   item="bandas";
                        precio=3500;
                        subTotal(precio);
                        break;
            case "9":   item="aminoacidos";
                        precio=4500;
                        subTotal(precio);
                        break;
            case "10":  item="animal pack";
                        precio=7500;
                        subTotal(precio);
                        break;
            case "11":  item="proteinas";
                        precio=6700;
                        subTotal(precio);
                        break;
            case "12":  item="batidos";
                        precio=5900;
                        subTotal(precio);
                        break;
        }
        compra +="\n"+item+"  "+cantidad;
    }else{
        alert("el codigo ingresado no corresponde a un producto")
    }
}
function subTotal(precio){
    cantidad=prompt("Cuantos productos desea agregar ?")
    parcial= parcial+(cantidad*precio);
}
function calculaenvio(){
    let zona=prompt("Ingrese su Provincia, sin espacios, ni mayusculas")
    switch(zona){
        case"buenosaires":  costoenvio=500;
                            break;
        case"caba":         costoenvio=350;
                            break;
        case"cordoba":      costoenvio=800;
                            break;
        case"santafe":      costoenvio=850;
                            break;
        case"salta":        costoenvio=1500;
                            break;
        case"entrerios":    costoenvio=870;
                            break;
        case"jujuy":        costoenvio=1700;
                            break;
        case"chubut":       costoenvio=1300;
                            break;
        case"catamarca":    costoenvio=1050;
                            break;
        case"rionegro":     costoenvio=1650;
                            break;
        default: 
        alert("ingrese una provincia valida")
    }
    alert("el costo del envio es:  "+costoenvio)
    total=parcial+costoenvio;
}
function modopago(){
    let cuotas=0;
    let preciofinal=0;
    let forma=prompt("Ingrese un metodo de pago: \n\n Ingrese: C para contado.\n Ingrese: T para tarjeta.\n")
    if((forma==="C")||(forma==="c")){
        preciofinal=total;
        alert("selecciono el siguiente metodo de pago: contado \n\n el total es: "+preciofinal)
    }else{
        if((forma==="T")||(forma==="t")){
            cuotas=prompt("Ingrese la catidad de cuotas")
            alert("selecciono el siguiente metodo de pago: tarjeta de credito\n\n el total es:\n\n "+cuotas+" cuotas de "+(total/cuotas))
        }else{
            alert("Ingrese un metodo de pago correcto")
        }
    }
}

function checkout(){
    let pagar=false;
    let entrega=confirm("Desea recibir su producto en casa?")
    if (entrega){
        calculaenvio();
    }else{
        alert("Pase a retirar por nuestro local ubicado en avenida Santa Fe, CABA.")
        total=total+parcial;
    }
    alert("el monto total de la compra es:  "+total)
    modopago();
    pagar=confirm("Desea abonar?")
    if(pagar){
        alert("Muchas gracias por comprar en No Gravity, usted obtendra sus productos a la brevedad")
    }else{
        alert("Su carrito quedara guardado")
    }

}

/*=============  CUERPO PRINCIPAL DEL CARRITO DE COMPRAS  ===============*/

registrado = confirm("Para disfrutar de todas las funciones del sitio necesita Identificarse con su usuario. \n\n Usted desea ingresar? ")
if(registrado){
    validacion();
}else{
    alert("Recuerde que para comprar necesita estar registrado. Muchas gracias")
}
alert("Bievenidos/as a la Seccion de compras de No Gravity \n\n")
while(!finalizar){
    alert("Seleccione el codigo de su producto")
    selecProd();
    finalizar=!confirm("desea seguir comprando?, o desea finalizar la compra")
}
alert("Bienvenidos/as a la seccion de checkout \n")
alert("Su carrito de compras posee los siguientes productos:\n"+compra+"\n\n Subtotal de la compra "+parcial)

if(log){
    checkout();
}else{
    while(!exit){
        alert("Para finalizar la compra debe ingresar con su usuario")
        exit=confirm("Desea salir del carrito de compras?")
        if((log===false) && (exit===false)){
            validacion();
            if(log){
                exit=true;
                checkout();
            }
        }else {
            alert("Muchas gracias por visitar la tienda de No Gravity")
        }
    }
}