// Problem 4 - Binary Search Algorithm

/* 
In a binary search we use the information that all the elements are sorted. 
Let’s try to solve the task in which we ask for the position of a value x in a sorted array. 
Let’s see how the number of candidates is reduced, for example for the value x = 31.

For every step of the algorithm we should remember the beginning 
and the end of the remaining slice of the array (respectively, variables beg and end). 
The middle element of the
slice can easily be calculated as mid = [(beg+end)/2].


=>

Dalam pencarian biner kami menggunakan informasi bahwa semua elemen diurutkan. 
Mari kita coba selesaikan tugas di mana kita meminta posisi nilai x dalam larik yang diurutkan. 
Mari kita lihat bagaimana jumlah kandidat dikurangi, misalnya untuk nilai x = 31.

Untuk setiap langkah algoritme, kita harus mengingat awal dan 
akhir potongan array yang tersisa (masing-masing, variabel beg dan end). 
Elemen tengah dari
slice dapat dengan mudah dihitung sebagai mid = [(beg+end)/2].
*/


/* PENJELASAN
Binary search adalah algoritma pencarian untuk data yang terurut. Pencarian dilakukan dengan cara 
menebak apakah data yang dicari berada ditengah-tengah data, kemudian membandingkan data 
yang dicari dengan data yang ada ditengah. 
Bila data yang ditengah sama dengan data yang dicari, berarti data ditemukan.

*/

// function binarySearch(array, x) {
    
//     let beg = 0;
//     let end = array.length-1;
//     let mid = 0;

//     while (beg <= end) {
//         mid = 
//     }
    
//     }


//    binarySearch([1, 1, 3, 5, 5, 6, 7], 3) // 2
//    binarySearch([1, 2, 3, 5, 6, 8, 10], 5) // 3
//    binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 53)  // 6
//    binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 100) // -1




/* 
Input: [1, 1, 3, 5, 5, 6, 7], x = 3
Output: 2

Input: [12, 15, 15, 19, 24, 31, 53, 59, 60], x = 100
Output: -1

*/


function binarySearch (array, x) {

    // -------------------------- Input ---------------------------

    // penampung data 
    let start = 0; // min
    let end = array.length - 1; // max
    let mid;

    // ------------------------------ Proses -------------------------------

    while (start <= end) { 
        mid = Math.floor((start + end) / 2); // 

        if (array[mid] === x) { // jika array pada index mid sama dengan x
            return mid; // panggil mid
        } else if (array[mid] < x) { // kalo nilai tengah kurang dari target geser kekanan 
            start = mid + 1; // return
        } else { // kalo nilai tengah lebih dari target maka geser ke kiri
            end = mid - 1; // return end
        }
    }
    return -1; // kalo ga ditemukan maka index hasilnya -1
}

// ------------------------------------- OutPut ------------------------------------------

    console.log(binarySearch([1, 1, 3, 5, 5, 6, 7], 3)) // 2
    console.log(binarySearch([1, 2, 3, 5, 6, 8, 10], 5)) // 3
    console.log(binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 53))  // 6
    console.log(binarySearch([12, 15, 15, 19, 24, 31, 53, 59, 60], 100)) // -1