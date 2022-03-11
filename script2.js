/* Tugas nomor 2 - Rewrite*/

/* Soal 
class kendaraan {
    var totalroda = 0;
    var kecepatanperjam = 0;
}

class mobil extends kendaraan {
    void berjalan () {
        tambahkecepatan(10);
    }

    tambahkecepatan(var kecepatanbaru) {
        kecepatanperjam = kecepatanperjam +kecepatanbaru;
    }
}

void main() {
    mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new mobil();
    mobillamban.berjalan();
}
*/

/* Hasil Re-Write */ 
class Kendaraan {                          // Penulisan nama class diubah sesuai aturan PascalCase
    totalRoda = 0;                         // Penulisan nama variabel diubah sesuai aturan camelCase
    kecepatanPerJam = 0;
}

// Penulisan nama class diubah sesuai aturan PascalCase
class Mobil extends Kendaraan {

    berjalan() {
        tambahKecepatan(10);                // Memanggil fungsi tambahKecepatan dengan argument 10.
    }

    tambahKecepatan(kecepatanBaru) {       // Penulisan nama funtion diubah sesuai aturan camelCase
        return kecepatanPerJam += kecepatanBaru;  // Mempersingkat penulisan penjumlahan dengan operator penugasan "+=".
    }
}

function main() {
    // Penulisan nama variabel diubah sesuai aturan camelCase
    const mobilCepat = new Mobil();       //menambahkan keyword "const";
    mobilCepat.berjalan();                // Pemanggilan fungsi cukup sekali

    // Penulisan nama variabel diubah sesuai aturan camelCase
    const mobilLamban = new Mobil();     //menambahkan keyword "const";
    mobilLamban.berjalan();
}
