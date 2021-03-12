/**
 * Write a recursive function to multiply two positive integers without using the * operator.
 * You can use addition, substraction and bit shifting, but you should minimize the number of operations
 */

 // 3 * 2 = 3 + 3 = 6
 // brute force
 function multiply(n1, n2) {
     
     let getSum = function(n, k) {
         if (n <= 1) return k;
         return k + getSum(n-1, k);
     }
     if (n1 < n2) {
         return getSum(n1, n2);
     } else {

         return getSum(n2, n1);
     }
 }

 console.log(multiply(3,2)) // 6
 console.log(multiply(452,225)) // 101700
 console.log(multiply(4552,225)) // 1024200
 console.log(multiply(4552,22775)) // 103671800
 console.log(multiply(4582,22845210775)) // 104676755771050
 console.log(multiply(22845210775,4582)) // 104676755771050

 function minProduct(a, b) {
     let bigger = a < b ? b : a;
     let smaller = a < b ? a : b;
     let minProductHelper = function(s,b, memo =new Map()) {
        if (memo.get(s)) return memo.get(s);
         if (s === 0) return 0; // 0 * bigger = 0
         else if (s === 1) return b; // 1 * bigger = bigger

         // compute half. If uneven, compute other half. If even, double it
         let ss = s >> 1; // divide by 2
         let side1 = minProductHelper(ss, b);
         let side2 = side1;
         if (s % 2 == 1) {
             side2 = minProductHelper(s - ss, b);
         }
         memo.set(s, side1 + side2)
         return memo.get(s);
     }
     return minProductHelper(smaller, bigger)
}
 console.log(minProduct(8,16)) // 128
 console.log(minProduct(7845148514,185148516)) // 1452517605166705200
 console.log(minProduct(784514845485124851204851208514,18514818452184516)) // 3.280399276438409e+38



