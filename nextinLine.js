function nextinLine(arr, item){
   arr.push(item)
    return arr.shift();
}

//set up 
const testArr=[1,2,3,4,5];

//dsiplay code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextinLine(testArr, 6));
console.log("After"+ JSON.stringify(testArr));