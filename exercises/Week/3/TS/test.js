

if(true && !false)
  console.log("true");
else 
  console.log("false");


  let arr=[1,2,3,4];
  arr.reverse[0];


  function arrNumWorker (arr, arrPos){
    if(arrPos > 0)
      return arr[arrPos]*10**arrPos + arrNum(arr, arrPos-1);
    else
      return arr[arrPos];
  }

  function arrNum (arr){
    return arrNumWorker (arr.reverse(), arr.length-1);
  }

  console.log(arrNum(arr));


  let n = 10;
  let s = "" + n;
  console.log(n.toString().reverse())

  function palindromeNum(num){
    let myNum = BigInt(num);
    let myStr = myNum.toString();

    let i = 0;
    let myTest = false;
    for(i=0;i<myStr.length/2;i++)
      myTest = (myStr[i] == myStr[(myStr.length-i)]);
  }
