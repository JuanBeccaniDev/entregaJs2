
function saludar(){
  let nombre = prompt("Ingrese su nombre");
  alert("bienvenidos " + nombre);
}
saludar();

let casaChalet = 10000
let casaConQuincho = 15000
let casaCampo = 20000
let cabañasGrandes=12000
let num2
let casa
let descQuincho =  casaConQuincho = 15000 *7.00/10
 
do{
  num2=parseFloat(prompt("Por favor elija su Casa deseada :n\n1 Casa Chalet\n2:Casa con Quincho\n3:Casa de Campo\n4:Cabaña Grande"))
  if(isNaN(num2)||casa >4|| casa <= 0 ){
    alert("Elija Su casa para alquilar\n Elija del 1 a 4.");
  
  }
  



if(num2==1){
  alert ("Su precio seria "+casaChalet+"$")
}else if(num2==2){
  descuentos(descQuincho)
  alert ("Su precio seria "+casaConQuincho +"$" )
  }else if(num2 ==3){
    alert ("Su precio seria "+cabañasGrandes+ "$" )
    }else if(num2 ==4){
      alert ("Su precio seria "+casaCampo+ "$" )
    }
 function descuentos(n1){
let total= n1*1.10
let resultado =n1-total
alert(`El valor con descuento es ${resultado}$`)

function casasAlquiler(n1,n2,n3,n4){
  let casasPremium= n1+n2+n3+n4
  let precio = casasPremium -(casasPremium*1.10)
  return precio;
}
 }

}

while(isNaN(num2)  >4||num2<=0)



/////////////SEGUNDA PRE-ENTREGA CURSO JAVASCRIP////////////

//objetos
const ivaGeneral = 0.21
const ivaReducido = 0.10

const chalet1={
  precio: 15000,
  cantidad:2,
  impuesto: ivaGeneral,
  calcularTotal(){
    return this.precio * this.cantidad * this.impuesto
  }
}
const chalet2={
  precio: 17000,
  cantidad:3,
  impuesto: ivaReducido,
  calcularTotal(){
    return this.precio * this.cantidad * this.impuesto
  }
}
const descuentos ={
  chalet1,
  chalet2,
  calcularTotal: function (descuento){
    return (this.chalet1.calcularTotal()+ this.chalet2.calcularTotal())* descuento;
  }
}
console.log(descuentos.calcularTotal(0.8))


//Class
class Productos {
  constructor(nombre, precio){
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.alquilada ="false" 
  }
  sumaIva(){
    this.precio = this.precio *1.21;
  }
  alquilar(){
    this.alquilar= true;
  }
}
const producto1 = new Productos("Casa Campo", "35000")
const producto2 = new Productos ("Casa apta mascotas","45000")
producto1.sumaIva();
producto2.sumaIva();
producto1.alquilar();

console.log(producto1,producto2);

//Funciones de tipo Superiores

const articulos =[
      {nombre:'Toallas',precio: 1500},
      {nombre:'Shamppo',precio: 500},
      {nombre:'Agua',precio: 500}
]
const resultado = articulos.find((el)=> el.nombre === "Toallas")
const resultado1 = articulos.find((el)=> el.nombre === "Agua")
const resultado2 = articulos.find((el)=> el.nombre === "Shamppo")



console.log(resultado)
console.log(resultado1)
console.log(resultado2)

const actualizado = articulos.map ((el)=>{
  return {
    nombre: el.nombre,
    precio: el.precio *1.30
  }
}

)
console.log(actualizado)

 // objeto Date
 
 const hoy = new Date ("September 29, 2023")


 console.log(hoy.getDay()+24,hoy.getMonth()+1,hoy.getFullYear())

 //Array
 const casasDeluxes = ["Casa Campo","chalet2","chalet1","casaChalet"]

 casasDeluxes.push("Nuevas cabanias de 4 habitaciones")
 console.log(casasDeluxes)

 //Array objetos
 const jabon={
   id:1,
   producto:"Lux Jabon",
   precio: "2500"
 };
 const shampoo ={
  id:2,
  producto: "Dove",
  precio: "1500"
 }
const perfume={
  id:3,
  producto: "Rexona",
  precio:"2000"
}
const productos =[ {id:1, productos:"jabon"},
                   {id:2,productos:"shampoo"},
                   {id:3,productos:"perfume"},

]
for(const i of productos){
    console.log(i.id);
     console.log(i.productos)
}





