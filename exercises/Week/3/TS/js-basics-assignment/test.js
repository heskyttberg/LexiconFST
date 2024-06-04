let msg = "";
let blanks = "";
let i = 0;
let j = 9;
let max = 9;

do {
    for(i=j;i>0;i--)
        msg += "*";

    for(i=0; i<(max-j)/2;i++)
        blanks += " ";

    console.log(blanks + msg);
    msg = "";
    blanks = "";

    j--;
    j--;
} while (j>0);