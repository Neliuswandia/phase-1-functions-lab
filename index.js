function distanceFromHqInBlocks(blocks){
    
   return Math.abs(blocks - 42)
}

function distanceFromHqInFeet(blocks){

    return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start , end){

    return Math.abs(start - end)* 264
}

