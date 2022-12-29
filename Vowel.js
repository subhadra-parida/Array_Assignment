var sentence="Some of the popular technologies are Java,Javascript, Python, Spark, Scala"
var c=0
for (var i=0;i<sentence.length;i++){
  if((sentence[i]==="a") || (sentence[i]==="e") || (sentence[i]==="i") || (sentence[i]==="o") || 
  (sentence[i]==="u") || (sentence[i]=="A") || (sentence[i]==="E") || (sentence[i]==="I") || (sentence[i]==="O") || (sentence[i]==="U")){
    c+=1
    }
}
console.log(c)
