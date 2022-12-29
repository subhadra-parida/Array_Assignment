// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        console.log(num);
    }
    else {
       console.log(fibonacci(num-1) + fibonacci(num - 2));
    }
}

fibonacci(5)





// take nth term input from the user
// const nTerms = prompt('Enter the number of terms: ');
function f(nTerms){
    if(nTerms <=0) {
        console.log('Enter a positive integer.');
    }
    else {
        for(let i = 0; i < nTerms; i++) {
            console.log(fibonacci(i));
    }
}
}
f(6)

