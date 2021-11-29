function firstNonRepeatingCharacter(string) {
    let charUsed = [];
    for (let i = 0; i < string.length; i++) { // si tu lis çà, tu vas pleurer lul
        //string.slice(i+1).indexOf(string[i])  Check si il y a de la récurence après le caractère i
        //console.log(charUsed.indexOf(string[i]))  Check si on a déjà croiser ce caractère acant le caractère i
        if (string.slice(i+1).indexOf(string[i]) == -1 && charUsed.indexOf(string[i]) === -1) { 
            return i;
        }
        charUsed.push(string[i])
    }
    return -1;
}

let string = "aazzcc";
console.log(firstNonRepeatingCharacter(string));


exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;