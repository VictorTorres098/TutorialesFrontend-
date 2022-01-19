//[14,2,55,22,11]
var arr = [14,2,55,22,11];

var numeroMenor=0;

function mayorArr(arr){
    var primer = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= primer){
            primer = arr[i];
        }
    }
    return primer; 
}
function menor(arr){
    var primer = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] <= primer){
            primer = arr[i];
        }
    }
    return primer; 
}
arr.
//for(var i = 0; i < arr.length; i++)
  //var primero = arr[0]
//  if(primero >= arr[i]){
//    primero = arr[i];
//  }
console.log(menor(arr) + mayorArr(arr));


function sumar(elarr) {
    const menor = Math.min.apply(null,elarr)
    const mayor = Math.max.apply(null,elarr)

    console.log("yo",menor + mayor) 
}

console.log(Math.min(1,2,3,4,5))
sumar(arr)

