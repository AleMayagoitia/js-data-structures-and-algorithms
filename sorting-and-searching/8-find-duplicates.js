/**
 * You have an array with all the numbers from 1 to N
 * where N is at most 32,000. The array may have duplicate entried and you do not know what N is
 * 
 * With onlu 4 kilobytes of memory available, how would you print all duplicate elements in the array?
 */

// 4 kilobytes of memory = 8 * 4 * 2^10 bits
// we can create a bit vector with 