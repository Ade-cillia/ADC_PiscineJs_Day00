function threeLargestNumbers(array){
    let arrMaxNum = [];
    let oneMaxNum;
    for (let i = 0; i < 3; i++){
        oneMaxNum = Math.max(...array);
        arrMaxNum.push(oneMaxNum); 
        array.splice(array.indexOf(oneMaxNum), 1);
    }
    arrMaxNum.sort((a, b) => a - b);
    return arrMaxNum;

}

array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
console.log(threeLargestNumbers(array));

exports.threeLargestNumbers =  threeLargestNumbers;