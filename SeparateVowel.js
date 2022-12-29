let sentence = "Javascript is a loosely typed language"
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;
for (j in sentence){
    if (sentence[j] === "a"){
        a++
    }
    if (sentence[j] === "e"){
        e++
    }
    if (sentence[j] === "i"){
        i++
    }
    if (sentence[j] === "o"){
        o++
    }
    if (sentence[j] === "u"){
        u++
    }
}
console.log("a =", a)
console.log("e =", e)
console.log("i =", i)
console.log("o =", o)
console.log("u =", u)

