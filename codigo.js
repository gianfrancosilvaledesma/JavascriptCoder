let nombre = "Gianfranco"

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

    while (EdadProcesada < 18) {
    alert("Sos menor, no es posible que ingreses.");
    EdadProcesada =PreguntarEdad();
  }
  alert("Sos mayor, puede ingresar.");
  return EdadProcesada;
  }


ResponderEdad()

const cervezas=["negra","roja","rubia","ipa"]

function Elegircervezas (){
    let cervezaElegida=parseInt(prompt("Como usted es mayor, Elija su cerveza: \n 1 - Cerveza negra \n 2 - Cerveza roja \n 3 - Cerveza Rubia \n 4 - Cerveza ipa \n Por favor ingrese el número de la cerveza que quiere."))
   if (cervezaElegida >= 1 && cervezaElegida <= cervezas.length) {
        alert("Elegiste: Cerveza " + cervezas[cervezaElegida - 1]);
    } else {
        alert("Opción inválida");
        Elegircervezas();
    }
}
Elegircervezas()
console.log(cervezas)  


function Usuario(nombre = "", tipoDeCliente = "", cervezaPreferida = []) {
  this.nombre = nombre;
  this.tipoDeCliente = tipoDeCliente;
  this.cervezaPreferida = cervezaPreferida;
  this.mostrarCervezas = function () {
    this.cervezaPreferida.forEach(cerveza => console.log(cerveza));
  };
}
//function Usuario(nombre = "", TipoDeCliente = "", CervezaPreferida = []){
  //this.nombre = nombre;
 // this.TipoDeCliente = TipoDeCliente
 // this.CervezaPreferida = CervezaPreferida
 // this.mostrarCervezas = function(){
  //  for(let Cerveza of this.CervezaPreferida){
  //    console.log(Cerveza)
  //  }
  //}
//}
 const Gian = new Usuario ("Gian", "VIP",["negra"])
 const Lucas = new Usuario ("Luquitas", "Estandar",["ipa"])

 console.log(Gian)
 console.log (Lucas)
//const andres = new Usuario("Andrés", "Estudiante", true, ["Js"])
//const juan = new Usuario("Juan", "Estudiante")

//console.log(andres)
//console.log(juan)
