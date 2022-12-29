
a1=[1,2,3,4]
a2=[4,5,6,7]
array=[]
for (i of a1){
    for (j of a2){
        union=([...a1,...a2])
    }
}
// console.log(union)
for (i of union){
    if (!array.includes(i)){
        array.push(i)
    }
}
console.log(array)