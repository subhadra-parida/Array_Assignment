// // ####Remove duplicate from list....
// a=[1,2,3,2,2]
// i=0
// b=[ ]
// while (i<a.length){
// 	if (a[i] not in b){
// 		b.append(a[i])
// 	i=i+1
//     }
// }
// print(b)
// let list1=['one','two','three','four','five']
// let list2=[1,2,3,4,5]
// var n={}
// for (i in list2){
//    n[list1[i]]=list2[i]
// }
// console.log(n);
// const student = [
//     {id:'s1',
//     marks:
//     {
//     'physics':100,
//     'maths':80
//     }
//     },
//     {id:'s2',
//     marks:
//     {
//     'physics':60,
//     'maths':40
//     }
//     },
//     {id:'s3',
//     marks:
//     {
//     'physics':70,
//     'maths':90
//     }
//     },
//     {id:'s4',
//     marks:
//     {
//     'physics':50,
//     'maths':85
//     }
//     },
//     {id:'s4',
//     marks:
//     {
//     'physics':30,
//     'maths':75
//     }
//     }
//     ];
// list=[]
// for(i of student){
//     physics=i['marks']['physics']
//     math=i['marks']['maths']
//     if (physics>=50 && math>=50){
//         list.push(i['marks'])
//     }
// }
// console.log(list)


// elements = [1,3,5,7,10,7,1,8,12]
// list=[]
// for(i of elements){
//     if (!list.includes(i)){
//         list.push(i)
//     }
// }
// console.log(list)

elements = [1,3,5,7,10,7,1,8,12]
list=[]
for(i of elements){
    if (!list.includes(i)){
        list.push(i)
    }
}
console.log(list)