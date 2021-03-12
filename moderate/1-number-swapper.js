/**
 * Write a function to swap two numbers in place
 * without temp variables
 */

function swapNumbers(arr, index1, index2) {
    arr[index1] = arr[index2] - arr[index1];
    arr[index2] = arr[index1] + arr[index2];
    arr[index1] = arr[index1] - arr[index2];

}