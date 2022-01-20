// //[14,2,55,22,11]
// var arr = [14,2,55,22,11];

// var numeroMenor=0;

// function mayorArr(arr){
//     var primer = arr[0];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] >= primer){
//             primer = arr[i];
//         }
//     }
//     return primer; 
// }
// function menor(arr){
//     var primer = arr[0];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] <= primer){
//             primer = arr[i];
//         }
//     }
//     return primer; 
// }
// arr.
// //for(var i = 0; i < arr.length; i++)
//   //var primero = arr[0]
// //  if(primero >= arr[i]){
// //    primero = arr[i];
// //  }
// console.log(menor(arr) + mayorArr(arr));


// function sumar(elarr) {
//     const menor = Math.min.apply(null,elarr)
//     const mayor = Math.max.apply(null,elarr)

//     console.log("yo",menor + mayor) 
// }

// console.log(Math.min(1,2,3,4,5))
// sumar(arr)

// Array.prototype.duplicar = function(){
//     return this.concat(this)
// }
// [123].duplicar() // 123123

// function duplicar()

// function test(){
    
//     console.log(this === window)
// }

// test()
// this === window
// const animal = {
//     nombre:"makako",
//     corre:function(){
//         console.log("el bicho corre y se llama"+this.nombre)
//     }
// }

// const perro = {
//     //nombre:"andres",
//     ladra:function(){
//         console.log("el bicho ladra")
//     },
//     __proto__:animal
// }



// for(propiedad in perro){
//     if(perro.hasOwnProperty(propiedad)){
//         console.log(propiedad)
//     }
// }


const test = () => {
    const algo = "algo"
    console.log(this.algo)
 }

test()