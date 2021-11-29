function twoNumberSum(array, targetSum){
    for (let i = 0; i < array.length; i++) {
        for(let j=0; j < array.length; j++){
            if (array[i]+array[j] === targetSum && i != j) {
                return [array[i],array[j]];
            }
        }
    }
    return [];
}
array = [ 3, 5, -4, 8, 11, 1, -1, 6];
targetSum = 10;
console.log(twoNumberSum(array,targetSum));

exports.twoNumberSum =  twoNumberSum;