let nombre = "Gian"

console.log(nombre)

//let Edad1 = parseInt(prompt("Ingrese su edad"))

function PreguntarEdad(){
     let Edad1 =prompt("Ingrese su edad") 
while(Edad1 === null || Edad1 === ""|| isNaN(Edad1) ){
    Edad1 = prompt("No dejes Campo vacio, responde bien")
}
    let EdadProcesada = parseInt(Edad1);
    return EdadProcesada;
    }
    let EdadProcesada = PreguntarEdad()
//PreguntarEdad()

function ResponderEdad (){
if(EdadProcesada >= 18){
    alert("Sos Mayor, puede ingresar")
}
else if(EdadProcesada < 18){
    alert ("Sos menor, no es posible que ingreses")
}
while(EdadProcesada < 18){
        EdadProcesada = PreguntarEdad();
}
}

ResponderEdad()

const cervezas=["negra","roja","rubia","ipa"]

function Elegircervezas (){
    let cervezaElegida=parseInt(prompt("Como usted es mayor, Elija su cerveza: \n 1 - Cerveza negra \n 2 - Cerveza roja \n 3 - Cerveza Rubia \n 4 - Cerveza ipa \n Por favor ingrese el número de la cerveza que quiere."))
   if (cervezaElegida >= 1 && cervezaElegida <= cervezas.length) {
        alert("Elegiste: Cerveza " + cervezas[cervezaElegida - 1]);
    } else {
        alert("Opción inválida");
    }
}
Elegircervezas(cervezas)
console.log(cervezas)  