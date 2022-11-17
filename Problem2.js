/*
Problem 2 - Money Change

Terdapat sebuah tempat untuk melakukan penukaran uang menjadi pecahan yang kecil. 
Pecahan uang tersebut diantaranya : 1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000. 
Buatlah sebuah program untuk menggerate hasil penukaran uang, 
dan hasil penukaran harus memenuhi hasil paling optimal dengan jumlah yang minimum! 
Pecahan yang ada memiliki jumlah yang tidak terbatas.

*/

function moneyChange(money) {

    // -------------------------------- INPUT ----------------------------
    const arrMoney = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]; // ini array pecahan uang

    /*  contoh sort zoom kelas
    let arrNumber = [20, 31, 40, 11, 10, 55, 60, 91, 88, 12, 45, 50, 40, 34, 70];
    let sortedArr = arrNumber.sort((a, b) => {
      return a - b;
    });
    */    
    arrMoneySort = arrMoney.sort((a, b) => { // sorting pada array
        return b - a;
    });

    let hasil = []; // penampung array untuk hasil akhir.


    // -----------------------------PROSES LOOPING-----------------------------------
    for (i = 0; i < arrMoney.length; i++) {
        if (arrMoneySort[i] < money) {
            money = money - arrMoneySort[i]; 
            hasil.push(arrMoneySort[i]); // push adalah menambah satu atau lebih elemen ke akhir sebuah array.
        }
    }
    return hasil; // memanggil hasil dari proses looping
}

// ---------------------- OUTPUT --------------------------------------

console.log(moneyChange(123)); // [100 20 1 1 1]
console.log(moneyChange(432)); // [200 200 20 10 1 1]
console.log(moneyChange(543)); // [500, 20, 20, 1, 1, 1]
console.log(moneyChange(7752)); // [5000, 2000, 500, 200, 50, 1, 1]
console.log(moneyChange(15321)); // [10000 5000 200 100 20 1]












