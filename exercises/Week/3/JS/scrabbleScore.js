
// To get the value for a single letter
function scoreLetter(c){
    let scoreTable = {
        A : 1,
        E : 1,
        I : 1,
        O : 1,
        U : 1,
        L : 1,
        N : 1,
        R : 1,
        S : 1,
        T : 1,
        D : 2, 
        G : 2,
        B : 3,
        C : 3,
        M : 3,
        P : 3,
        F : 4,
        H : 4,
        V : 4,
        W : 4,
        Y : 4,
        K : 5,
        J : 6,
        X : 6,
        Q : 7, 
        Z : 7
    };

    return scoreTable[c];
}

// Looping through our word and sum up total score
function scoreWord (str){

    let sum = 0;
    let i = 0;

    for(i=0;i<str.length; i++)
        sum += scoreLetter(str[i]);

    return sum;
}

let str = "cabbage";
let msg = scoreWord(str.toUpperCase());
console.log(msg);