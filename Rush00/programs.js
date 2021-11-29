function sun(buildings, direction){
    let buildingMax= Math.max(...buildings);
    let buildingPose = buildings.indexOf(buildingMax);
    let possibleTest;
    if (direction=="Ouest") {
        possibleTest = buildings.slice(0, buildingPose+1)
    }else if (direction=="Est"){
        possibleTest = buildings.slice(buildingPose, -1)
    }else {
        return "Indiquez la diréction du coucher de soleil"
    }
    let test = possibleTest[0] ;
    for (let i = 0; i < possibleTest.length; i++) {
        console.log(possibleTest[i]);
        if (possibleTest[i]<test) {
            test =
        }
    }
}

immeubles = [3, 5, 4, 4, 3, 1, 3, 2]
direction = "Est"

console.log(sun(immeubles,direction))
exports.sun = sun ;