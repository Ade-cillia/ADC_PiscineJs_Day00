function levDist(str1, str2){
    let result = {
        replace:0,
        add:0,
        remove:0
    };
    if (str1.length>str2.length) {
        strChange=str1
        littleString = str2
    } else {
        strChange=str2
        littleString = str1
    }
    for (let i = 0; i < strChange.length; i++) {
        console.log("start-----------")
        console.log("String change="+strChange)
        console.log("String objectif="+littleString)
        //console.log("char="+strChange[i])
        console.log("index="+i)
        if ((strChange[i+1] == littleString[i]) && littleString[i]){
            console.log("Remove");
            result["remove"] += 1;
            strChange = strChange.substring(0,i)+strChange.substring(i+1)
            i--; // le remove enlève logiquement un de l'index
            
        }else if(littleString[i+1] == strChange[i]  && littleString[i]){
            console.log("Add");
            result["add"] += 1;
            strChange = strChange.substring(0,i)+littleString[i]+strChange.substring(i)
        }else if (littleString[i] != strChange[i] && littleString[i]) {
            console.log("Replace");
            result["replace"] += 1;
            strChange = strChange.substring(0,i)+littleString[i]+strChange.substring(i+1)

        }else if (!littleString[i] ) {  // Si la petite string na plus de caractère a partire de i
            console.log("RemoveEnd"); //litle string finish
            result["remove"] += 1;
            strChange =strChange.substring(0,i)+strChange.substring(i+1)
            i--;
            
        }
        //console.log("end-----------")
    }
    console.log(strChange)
    console.log(littleString)
    //return result
    result["allChange"] = result["replace"]+result["add"]+result["remove"];
    return result;
}


str1 = "moi je mange des pates" 
str2 = 'lui il mange du fromage'
console.log(levDist(str1,str2))

exports.levDist =  levDist;