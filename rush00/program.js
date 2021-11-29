function sun(buildings, direction){
    let testBuilding;
    let arrSeeSun = [];
    
    if (direction=="Ouest") {
        testBuilding= buildings[0];
        arrSeeSun.push(0);
        for (let i = 0; i < buildings.length; i++) {
            if (buildings[i] > testBuilding) {
                testBuilding = buildings[i];
                arrSeeSun.push(i)
            }
        }
    } else if (direction=="Est") {
        testBuilding= buildings[buildings.length-1];
        arrSeeSun.push(buildings.length-1);
        for (let i = buildings.length-1; i > 0; i--) {
            if (buildings[i] > testBuilding) {
                testBuilding = buildings[i];
                arrSeeSun.push(i)
            }
        }
    }else {
        return "Indiquez la diréction du coucher de soleil"
    }
    arrSeeSun = arrSeeSun.sort((a,b)=> a-b)
    return arrSeeSun;
}

immeubles = [3, 5, 4, 4, 3, 1, 3, 2]
direction = "Ouest"

console.log(sun(immeubles,direction))

exports.sun = sun ;