/**
 * Given two straight line segments (represented as startPoint and endPoint)
 * compute the point of intersection if any
 */

// obten la pendiente
function getPendiente(startingPoint, endingPoint) {
    return  +(endingPoint.y - startingPoint.y / endingPoint.x - startingPoint.x).toFixed(2);
}

function getYIntersectionValue(point, m) {
    console.log(point.y, point.x * m)
    return point.y - (point.x * m);
}

function getIntersection(lineA, lineB) {
    let mA = getPendiente(lineA.startingPoint, lineA.endingPoint);
    let yIntersectionA = getYIntersectionValue(lineA.startingPoint, mA);
    
    let mB = getPendiente(lineB.startingPoint, lineB.endingPoint);
    let yIntersectionB = getYIntersectionValue(lineB.startingPoint, mB);

    console.log({mA, yIntersectionA, mB, yIntersectionB})
    
    let x = (yIntersectionA - yIntersectionB) / (mA - mB);
    let y = (mA * x) +  yIntersectionA;

    console.log({x,y})


}
let lineA = {
    startingPoint: {
        x: 2,
        y: 1
    },
    endingPoint: {
        x: -1,
        y: -5
    }
}

let lineB= {
    startingPoint: {
        x: 1,
        y: 1
    },
    endingPoint: {
        x: 4,
        y: 5
    }
}
getIntersection(lineA, lineB);