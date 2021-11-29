function levDist(str1, str2){
    let result = {
        replace:0,
        add:0,
        remove:0
    };
    let maxLen;
    let str1Change=str1
    let str2Change = str2
    let bigStr;
    if (str1.length>str2.length) {
        maxLen=str1.length
        bigStr=str1
    } else {
        maxLen=str2.length
        bigStr=str2
    }
    /*
    if (str1.length>str2.length) {
        strChange=str1
        str2Change = str2
    } else {
        strChange=str2
        str2Change = str1
    }
    */
    for (let i = 0; i < maxLen; i++) {
        //console.log("start-----------")
        //console.log("String change="+str1Change)
        //console.log("String objectif="+str2Change)
        //console.log("char="+str1Change[i])
        //console.log("index="+i)
        if ((str1Change[i+1] == str2Change[i]) && str2Change[i]){
            //console.log("Remove");
            result["remove"] += 1;
            str1Change = str1Change.substring(0,i)+str1Change.substring(i+1)
            i--; // le remove enlève logiquement un de l'index
            
        }else if(str2Change[i+1] == str1Change[i]  && str2Change[i]){
            //console.log("Add");
            result["add"] += 1;
            str1Change = str1Change.substring(0,i)+str2Change[i]+str1Change.substring(i)
        }else if (str2Change[i] != str1Change[i] && str2Change[i]) {
            //console.log("Replace");
            result["replace"] += 1;
            str1Change = str1Change.substring(0,i)+str2Change[i]+str1Change.substring(i+1)

        }else if (str1Change != str2Change && !str2Change[i]) {  // Si la petite string na plus de caractère a partire de i
            //console.log("RemoveEnd"); //litle string finish
            result["remove"] += 1;
            str1Change =str1Change.substring(0,i)+str1Change.substring(i+1)
            i--;
            
        }
        //console.log("end-----------")
    }
    //console.log(str1Change)
    //console.log(str2Change)
    //return result
    result["allChange"] = result["replace"]+result["add"]+result["remove"];
    console.log(result)
    return result["allChange"];
}


str1 = "lui il mange du fromage";
str2 = 'moi je mange des pates';
console.log(levDist(str1,str2))

exports.levDist =  levDist;