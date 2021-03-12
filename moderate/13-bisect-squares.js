/**
 * Given two squares on a two dimentional plane, find a line that would
 * cut these two squares in half.
 * Assume that the top and bottom sides of the square tun parallel to the x-axis
 * 
 * line means:  y = mx + n
 */

let square1 = {leftUp: {x: 1, y: 4}, leftDown: {x: 1, y: 3}, rightUp: {x: 2, y: 4}, rightDown:{x: 2, y: 3}}
let square2 = {leftUp: {x: 3.5, y: 1.5}, leftDown: {x: 3.5, y: .5}, rightUp: {x: 4.5, y: 1.5}, rightDown:{x: 4.5, y: .5}}
console.log(getLine(square1, square2))

function getLine(square1, square2) {
    // get the mid point for both
    let midPointSq1 = getMidPointOfSquare(square1);
    let midPointSq2 = getMidPointOfSquare(square2);

    let slope = getSlope(midPointSq1, midPointSq2);
    let yIntersection = getYIntersection(midPointSq1, slope);
    return `y = ${slope}x + ${yIntersection}`
}

function getMidPointOfSquare(square) {
    let startingPoint = square.leftDown;
    let endPoint = square.rightUp;

    let midX = (startingPoint.x + endPoint.x) / 2;
    let midY = (startingPoint.y + endPoint.y) / 2;
    return {x: midX, y: midY}
}

function getSlope(pointA, pointB) {
    // x1 - x2 / y1 - y2
    return (pointA.x - pointB.x) /  (pointA.y - pointB.y)

}
function getYIntersection(point, slope) {
    return point.y - (slope * point.x)
}