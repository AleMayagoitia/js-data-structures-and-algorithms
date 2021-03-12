/**
 * Given an input file with four billion non-negative integers, provide an algorithm to generate an integer
 * that is not contained in the file
 * 
 * Assume you have 1GB of memory available for this task
 * 
 * Follow up:
 * What if you have only 10MB  of memory? Assume that all values are distinct and we now have 
 * no more than one billion non-negative integers
 * 
 */


// 1 GB = 8 billion bits

/**
 * 1) create a bit vector with 2 billion bits. Recall that a bit vector is an array that compactly stores boolean values
 *    using an array of ints (or another data type). Each int represents 32 boolean values
 * 2) Initialize the bit vector with all 0s
 * 3) Scan all numbers (num) from the file and call BV.set(num, 1)
 * 4) Now scan again BV from the 0th index
 * 5) Return the first index which has value of 0
 */

// let bv = new Byte