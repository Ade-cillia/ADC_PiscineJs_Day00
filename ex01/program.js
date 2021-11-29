function isPalindrome(string){
    let nvStr = "";
    for (let i = string.length-1; i >= 0; i--) {
        nvStr +=string[i];
    }
    if (string === nvStr) {
        return true;
    } else {
        return false;
    }
}

let string = "tutut";
console.log(isPalindrome(string));


exports.isPalindrome =  isPalindrome;