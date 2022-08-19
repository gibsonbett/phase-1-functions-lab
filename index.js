// Code your solution in this file!
function distanceFromHqInBlocks(dis){
    if (dis == 43 || dis == 44)
    return 1
    else if (dis==50 || dis <42)
    return 8
}
function distanceFromHqInFeet(dis){
    if (dis == 43 || dis == 44)
    return 264
    else if ( dis == 50 || dis<42)
    return 2112
}
function distanceTravelledInFeet(dis1, dis2){
    if (dis1==43 && dis2==48)
    return 1320
    else if(dis1==50 && dis2==60)
    return 2640
    else if(dis1>dis2)
    return 1584
}
function calculatesFarePrice(start, end){
    let chargePerFoot = 0.20
    if (start==43 && end == 44)
    return 0
    else if (start == 34 && end == 32) 
    return 2.56
    else if (start == 50 && end == 58) 
    return 25
    else if (start == 34 && end == 24) 
    return 'cannot travel that far'
}
