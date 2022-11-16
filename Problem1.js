/* 
We have three different integers, x, y and z, 
which satisfy the following three relations:
x + y + z = A
xyz = B
x^2 + y^2 + z^2 = C
You are asked to write a program that solves for x, y and z for 
given values of A, B and C. (1 ≤ A, B, C ≤ 10000).

=> 

Kami memiliki tiga bilangan bulat yang berbeda, x, y dan z, 
yang memenuhi tiga hubungan berikut:
x + y + z = A
xyz = B 
x^2 + y^2 + z^2 = C 
Anda diminta untuk menulis sebuah program yang memecahkan x, y dan z 
untuk nilai yang diberikan A, B dan C. (1 ≤ A, B, C ≤ 10000).
*/


function simpleEquations(a, b, c) {
 
  /*  ------- PERMINTAAN SOAL ------

  - x + y + z = A // tambah
  - xyz = B // kali
  - x^2 + y^2 + z^2 = C // pangkat 2 + pangkat 2 + pangkat 2
  
  */

// ------------------------------ PROSES LOOPING -------------------------------
  for (let i = 1; i <= a; i++) { // looping 1
    for (let j = 1; j <= b; j++) { // looping 2
      for (let k = 1; k <= c; k++) { // looping 3
        if (i + j + k === a && i * j * k === b && i*i + j*j + k*k === c) { // pernyataan dari soal x^2 adalah i * i, y^2 adalah y*y, dan z^2 adalah j*j.
          console.log(i, j, k); // i, j, k adalah hasil looping
          return; // memanggil pernyataan dari if
        }
      }
    }
  }
  console.log("no solution"); // ini adalah peryataan yang mana, jika tidak ada sama sekali.

}

// -------------------- OUTPUT ---------------------

simpleEquations(1, 2, 3)  // no solution
simpleEquations(6, 6, 14) // 1 2 3

/* 

Sample Test Cases
Input: 1 2 3
Output: No solution.

Input: 6 6 14
Output: 1 2 3
*/