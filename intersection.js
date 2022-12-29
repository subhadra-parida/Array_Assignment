// var commonValues = [];
// var i, j;
// var arr1Length = arr1.length;
// var arr2Length = arr2.length;

// for (i = 0; i < arr1Length; i++) {
//     for (j = 0; j < arr2Length; j++) {
//         if (arr1[i] === arr2[j]) {
//             commonValues.push(arr1[i]);
//         }
//     }
// }

a="w3resourse"
b={}
for (i in a){
    if (i in b){
        b[i]=b[i]+1
    }
    else{
        b[i]=1
    }
}
console.log(typeof(b))